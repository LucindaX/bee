import React from 'react'
import {shallow,mount} from 'enzyme';
import AddSkillWidget from '../addSkillWidget/addSkillWidget';
import SkillContainer from '../addSkillWidget/skillContainer';
import sinon from 'sinon';


test('input skill is added to state', () => {
  
  
  const initState = new Promise((r) => r({ json: () => [] }));

  sinon.stub(window, 'fetch').returns(initState);


  const component = mount(
      <AddSkillWidget />
  );

  const spy = jest.spyOn(component.instance(), 'handleSubmit');
  
  var inputSkills = component.find('input[name="inputSkills"]');
  inputSkills.instance().value = "Node.js";
  inputSkills.simulate('change');

  var experience = component.find('select');
  experience.instance().value = "2 years";
  experience.simulate('change');

  expect(component.state().experience).toBe("2 years");
  expect(component.state().inputSkills).toBe("Node.js");

  const resolved = new Promise((r) => {
    return r({ json: () => ({ id: 1, name: "Node.js", experience: "2 years"})})
  });

  window.fetch.restore();

  sinon.stub(window,'fetch').returns(resolved);
  
  component.find('form').simulate('submit');

  expect(spy).toHaveBeenCalled();
  
  expect(component.state().skills.length).toBe(1);

});
