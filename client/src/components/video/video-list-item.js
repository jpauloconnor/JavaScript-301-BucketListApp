// { Component } is the same as const Component = React.Component
import React, { Component } from 'react';

//extends is like inheritance - here we are giving class SearchBar React.component attributes
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return  (

			<div className="search-bar">
				<label className="vidSearchLbl">
					Enter your video search: 
				</label>
				<input 
					value = {this.state.term}
					onChange={ (event) => this.onInputChange(event.target.value) } />
			</div>
		);
			
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;