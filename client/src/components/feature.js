import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

   changeNameOne(event){
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
      <input type="text" onChange={this.changeNameOne.bind(this)}/>

      {this.props.message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);


       
       