import React from 'react';

class ComponentsIntro extends React.Component {
  render() {
    return (
    	<div>
    		<h1>Components Intro</h1>
    		<ul>
                <li>Let you split the UI into independent, reusable pieces</li>
                <li>Allow for isolation of each piece.</li>
                <li>There is a Component Lifecycle, which we'll discuss.</li>
                <li>All Custom Components should start with a capital letter</li>
                <li>Right now, we're creating instances of components in app.js</li>
            </ul> 
            <hr/>
    	</div>
    );
  }
}
