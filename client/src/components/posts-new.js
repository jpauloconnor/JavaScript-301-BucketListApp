import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	handleFormSubmit(formProps){
	  //call action creator to sign up the user
	  this.props.createPost(formProps);
	}

	renderAlert(){
	  if (this.props.errorMessage) {
	    return(
	      <div className="alert alert-danger">
	        <strong>Oops</strong> {this.props.errorMessage}
	      </div>
	     );
	  }
	}

	render() {
	
		const { fields: { title, categories, content }, handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);

	}
}

function validate(values) {
	const errors = {};
	if (!values.title) {
		errors.title = "Enter a username";
	}
	if (!values.categories) {
		errors.categories = "Enter categories";
	}
	if (!values.content) {
		errors.content = "Enter content";
	}
	return errors;
}
//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);