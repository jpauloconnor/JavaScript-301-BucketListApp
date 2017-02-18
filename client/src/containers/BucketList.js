import React, { Component } from 'react';
import { connect } from 'react-redux';


class BucketList extends Component{
  renderList(){
  	return this.props.bucketlist.map((bucketlist) => {
  		return (
  			<li key={bucketlist.title, bucketlist.category} className="list-group-item">{bucketlist.title} - {bucketlist.category}</li>
  		);
  	});
  }


  render() {
    return (
      <div>
        <h1>Bucket List</h1>
        	<ul className="list-group col-sm-4">
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
		bucketlist: state.bucketlist
	};
}


//export 
export default connect(mapStateToProps)(BucketList);