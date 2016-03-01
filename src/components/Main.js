import React, { Component } from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import ArticleList from './ArticleList';

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
				<ArticleList articles={ this.state.articles } />
			</div>
		);
	}
}