import React, { Component } from 'react';

export default class Entry extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="col-md-8">
					{ this.props.params.id }
				</div>
				<div className="col-md-4">
					Sidebar
				</div>
			</div>
		);
	}
}