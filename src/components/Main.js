import React, { Component } from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import Article from './Article';

export default class Main extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}

		fetch('http://localhost:3004/articles')
		    .then(function(response) {
		        if (response.status >= 400) {
		            throw new Error("Bad response from server");
		        }
		        return response.json();
		    })
		    .then((data) => {
		        this.setState({
		        	articles: data
		        });
		    });
	}

	render() {
		return (
			<div className="col-md-8">
				{ this.state.articles.map(function(article, index) {
					return (
						<Article key={ article.id } article={ article } />
					);
				}) }
			</div>
		);
	}
}