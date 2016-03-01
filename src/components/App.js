import React from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function() {
	return (
		<div>
			<Header />
			<div>
				<Main />
				<Sidebar />
			</div>
			<Footer />
		</div>
	);
}