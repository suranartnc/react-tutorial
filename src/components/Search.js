import React, { Component } from 'react';

export default class Search extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<input type="text" placeholder="Search" />
				<button>Submit</button>
			</form>
		);
	}
}