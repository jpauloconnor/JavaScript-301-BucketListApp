import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandDetail extends Component {
	render () {
		if (!this.props.band) {
			return <div>Select a book to get started.</div>;
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.band.name}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		band: state.selectedBand
	};
}

export default connect(mapStateToProps)(BandDetail);