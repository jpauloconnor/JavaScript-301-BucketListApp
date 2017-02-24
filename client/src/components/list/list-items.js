import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';

class ListItems extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	renderItems() {
		return this.props.posts.map((post) => {
		
			return (
				<li className="list-group-item" key={post._id}>
					<Link to={"lists/" + post._id}>
						<span className="pull-xs-right">{post.topic}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 text-xs-left">
						<h3 className="text-xs-left">Lists</h3>
					</div>

					<div className="col-sm-6 text-xs-right">
						<Link to="/newitem" className="btn btn-primary">
							Add a List Item
						</Link>
					</div>
				</div>

				<div id="space"></div>

				<ul className="list-group">
					{this.renderItems()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(ListItems);