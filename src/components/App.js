import React, { Component } from 'react';

import Header from './Header';
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
				<div className="row">
					<Main />
					<Sidebar />
				</div>
				<Footer />
			</div>
		);
	}
}