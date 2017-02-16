/*Objectives:
  -explain state
    -state is what is used to update the ui
    -state of application 
  -explain setState
  -show default state
  -manipulate state
*/

import React from 'react';

class StateIntro extends React.Component {
  
  constructor(){
    super();
    this.state = {
      name: "Michael Bolton",
      otherName: "Kenny G"
    }
    this.changeNameOne = this.changeNameOne.bind(this)
  } 
  //Method 1
  changeNameOne(event){
    this.setState({name: event.target.value})
  }
  //Method 2
  changeNameTwo(event){
    this.setState({otherName: event.target.value})
  }
  //Method 3
  render() {
    return (
    	<div>
        <h3>State</h3>
        <p>Use the input field to see the state change.</p>
        <input type="text" onChange={this.changeNameOne}/>
        <input type="text" onChange={this.changeNameTwo.bind(this)}/>
        <p>{this.state.name} and {this.state.otherName} are the greatest musicians on the planet!</p>
     	  <hr />
      </div>

    );
  }
}


export default StateIntro;
