import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';
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
				

				<fieldset className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</fieldset>

				<fieldset className="form-group">
					<label>Category</label>
					<input type="text" className="form-control" {...categories} />
				</fieldset>

				<fieldset className="form-group">
					<label>Content</label>
					<textarea type="text" rows="8" className="form-control text" {...content} />
				</fieldset>

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