import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/fontawesome-free-solid'

class SkillContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      skills: this.props.skills,
      showDelete: []
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover(index){
    let showDelete = this.state.showDelete.slice(0);
    showDelete[index] = !showDelete[index];
    this.setState({ showDelete: showDelete });
  }

  componentWillReceiveProps(nextProps){
    this.setState({ skills: nextProps.skills });
  }

  render(){
    const list = this.state.skills.map( (ele, index) => 
      
        <div className="skill-box col-12 col-md-3"
        key={index}>

        <div className="row no-gutters" 
          onMouseEnter={this.handleMouseHover.bind(this,index)}
          onMouseLeave={this.handleMouseHover.bind(this,index)}>
         
          <div className="index-badge col-1">{index+1}</div>
          
          <div className="skill-content-col col-6 offset-2">
            {ele.name}<br/>
            {ele.experience}
          </div>
          
          <div className={ 'close-tag col-2 offset-1 '+ (this.state.showDelete[index] ? '' : 'd-none') }>
            <FontAwesomeIcon icon={faTimes} />
          </div>

        </div>
      </div>
    );
    return (
      <div className="row">
        {list}
      </div>
    )
  }
}

export default SkillContainer;
