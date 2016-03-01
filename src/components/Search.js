import React, { Component } from 'react';

export default class Search extends Component {
	
	constructor(props) {
		super(props);
	}

	handleFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<input type="text" placeholder="Search" />
				<button>Submit</button>
			</form>
		);
	}
}