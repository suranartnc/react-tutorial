import React from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function() {
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