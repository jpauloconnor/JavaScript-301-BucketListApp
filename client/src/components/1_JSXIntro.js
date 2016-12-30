import React from 'react';

class JSXIntro extends React.Component {
  render() {
    return (
    	<div>
    		<h3>JSX</h3>
    		<ul>
    			<li>Stand for JavaScript Extensions</li>
                <li>Looks a lot like HTML, but it's not.</li>
    			<li>Compiles down to pure JavaScript</li>
                <li>Easier than writing pure JS</li>
                <li>Makes code safe from injection attacks</li>
    		</ul>
            <hr/>
    	</div>
    );
  }
}

export default JSXIntro;