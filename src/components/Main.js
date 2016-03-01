import React, { Component } from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import Search from './Search';
import ArticleList from './ArticleList';

export default class Main extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			articles: []
		}

		this.getSearchResults = this.getSearchResults.bind(this);

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

	getSearchResults(keyword) {
		fetch(`http://localhost:3004/articles?q=${keyword}`)
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
				<Search getSearchResults={this.getSearchResults} />
				<ArticleList articles={ this.state.articles } />
			</div>
		);
	}
}