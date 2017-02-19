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

// Anything returned from this function will end up as props on the BookList container
// We need this so we can call this.props.selectBook above, and kickstart the
// action >> reducer >> state change process
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBand: selectBand }, dispatch);
}

//export 
export default connect(mapStateToProps, mapDispatchToProps)(BandList);