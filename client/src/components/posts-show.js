import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick() {
		this.props.deletePost(this.props.params.id)
		.then(() => { this.context.router.push('/')});
	}

	render() {
		const post  = this.props.post;
		if (!post) {
			return <div>Loading Post...</div>;
		}
	
		return (
			<div>

				<h3>{post.title}</h3>
				<div id="space"></div>
				<h6>Category: {post.categories}</h6>
				<div id="space"></div>
				<p>{post.content}</p>
				<Link to="/" className="btn btn-primary">Back to Post List</Link>
				
				<button className="btn btn-danger"
					onClick={this.onDeleteClick.bind(this)}>
					Delete Post
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);