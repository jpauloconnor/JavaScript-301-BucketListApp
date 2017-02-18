import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandList extends Component{
    renderList(){
    	return this.props.b.map((b) => {
    		return (
    			<li key={b.name} className="list-group-item">{b.name}</li>
    		);
    	});
    }

    render() {
      return (
      	<ul className="list-group col-sm-4">
          {this.renderList()}
      	</ul>
      );
    }
}


//takes app state as arg.
//whatever gets returned will show up as props inside of band list

function mapStateToProps(state){
	return{
		b: state.bands
	};
}


//export 
export default connect(mapStateToProps)(BandList);