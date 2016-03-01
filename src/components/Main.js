import React, { Component } from 'react';

import mockData from '../utils/mockData';
import Article from './Article';

export default class Main extends Component {
	
	constructor(props) {
		super(props);
		this.articles = mockData;
	}

	render() {
		return (
			<div className="col-md-8">
				{ this.articles.map(function(article, index) {
					return (
						<Article key={ article.id } article={ article } />
					);
				}) }
			</div>
		);
	}
}