import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBand } from '../actions/index';
import { bindActionCreators } from 'redux';

class BandList extends Component{
  renderList(){
  	return this.props.bands.map((banditem) => {
  		return (
  			<li 
          key={banditem.name} 
          onClick={() => this.props.selectBand(banditem)}
          className="list-group-item">
          {banditem.name}
        </li>
  		);
  	});
  }


  render() {
    return (
      <div>
        <h1>Bands</h1>
      	<ul className="list-group col-sm-6">
          {this.renderList()}
      	</ul>
      </div>
    );
  }
}

//takes app state as arg.
//whatever gets returned will show up as props inside of band list

function mapStateToProps(state){
	return{
		bands: state.bands
	};
}

// All things returned from this function will end up as props on the BandList container.
// We need this so we can call the selectBand function above through this.props.selectBand 
// That will start the action >> reducer >> state change process
function mapDispatchToProps(dispatch) {
  // Whenever selectBand is called, this will pass the result to ALL of our reducers
  return bindActionCreators({ selectBand: selectBand }, dispatch);
}


//export 
//Just like with the matching of the state to the props, we need to attach
//the actions to the reducer.
export default connect(mapStateToProps, mapDispatchToProps)(BandList);