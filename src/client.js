import React from 'react'
import ReactDOM from 'react-dom'

/* Create a simple component without JSX
	<div>
		React Tutorial
	</div> 
*/
const App = function() {
	// return React.createElement('div', null, 'React Tutorial');
	return (
		<div>
			React Tutorial
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'))