import React, { Component } from 'react';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default class App extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Nav />
				<div className="row">
					{ this.props.children }
					<Sidebar />
				</div>
				<Footer />
			</div>
		);
	}
}