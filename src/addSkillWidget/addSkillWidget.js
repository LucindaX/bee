import React, {Component} from 'react';
import SkillContainer from './skillContainer';

class AddSkillWidget extends Component {
  constructor(){
    super();
    this.state = {
      skills: [],
      inputSkills: "",
      experience: "",
      errors:[],
      submitDisabled: true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    /*fetch('/skills')
      .then( response => {
        return response.json();
      })
      .then( data => {
        this.setState({ skills: data });
      });
    */
  }

  handleSubmit(event){
    
    event.preventDefault();

    var inputSkills = this.state.inputSkills;

    inputSkills = [...new Set(inputSkills.split(','))];
    
    // validations
    var errors = [];

    inputSkills.forEach( skill => {
      if (skill.length > 255 || skill.length < 4)
        errors.push({key: skill, message:"skill entries must be between 4 & 255 characters"});
    });

    if(errors.length) return this.setState({ errors: errors });
    
    
    let skills = this.state.skills.concat(inputSkills.map( x => ({ name: x, experience: this.state.experience }) ));
    
    this.setState({ 
      skills: skills, 
      inputSkills: "", 
      experience: "",
      submitDisabled: true,
      errors: []
    });
  }

  handleInputChange(event){
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let otherInput = name === "inputSkills" ? this.state.experience : this.state.inputSkills ;

    if(otherInput !== "" &&
        value !== ""){
      this.setState({ submitDisabled: false });
    }

    this.setState({
      [name]: value
    });

    

  }

  render(){
    
    let errors = this.state.errors.map( (error, index) =>
        <div key={index} className="error">{error.key}:{error.message}</div>
    );

    return (
      <div className="container widget-container">
      <div className="errors-wrapper">
        {errors}
      </div>
      <div className="title row">
        <div className="col-12 col-md-4 offset-md-1">ADD YOUR SKILLS</div>
      </div>
      <form className="row" onSubmit={this.handleSubmit}>

        <div className="form-group col-12 col-md-4 offset-md-1">
          <input className="form-control" 
            name="inputSkills" type="text" 
            placeholder="Node.js,Express.js,....etc" 
            value={this.state.inputSkills} 
            onChange={this.handleInputChange} />
        </div>

        <div className="form-group col-8 col-md-3">
          <select className="form-control" 
            name="experience" value={this.state.experience} 
            onChange={this.handleInputChange}>

            <option value="" disabled defaultValue hidden>Experience</option>
            <option value="1 year">1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5-7 years">5-7 years</option>
            <option value="7+ years">7+ years</option>
          </select>
        </div>

        <div className="form-group col-4 col-md-3">
          <input type="submit" value="Add Skills"
            className="form-control btn btn-primary"
            disabled={this.state.submitDisabled}/>
        </div>

      </form>
      
      <div className="skill-box-wrapper row">
        <div className="skill-box-container col-12 col-md-10 offset-md-1">
          <SkillContainer skills={this.state.skills} />
        </div>
      </div>
      
      </div>
    );
  }
}

export default AddSkillWidget;
