import React, { Component } from 'react';

export default class PostApp extends Component {
  render() {
    return (
      <div>
      {this.props.children} {/*this renders the children within the routes.js*/}
      </div>
    );
  }
}
