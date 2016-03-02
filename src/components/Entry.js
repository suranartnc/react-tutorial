import React, { Component } from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Entry extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			article: {}
		}
	}

	componentDidMount() {
		this.getArticleById(this.props.params.id);
	}

	getArticleById(id) {
		fetch(`http://localhost:3004/articles/${id}`)
		    .then(function(response) {
		        if (response.status >= 400) {
		            throw new Error("Bad response from server");
		        }
		        return response.json();
		    })
		    .then((data) => {
		        this.setState({
		        	article: data
		        });
		    });
	}

	render() {
		return (
			<div>
				<div className="col-md-8">
					<article>
						<h1>{ this.state.article.title }</h1>
						<div dangerouslySetInnerHTML={{ __html: this.state.article.body }} />
					</article>
				</div>
				<div className="col-md-4">
					Sidebar
				</div>
			</div>
		);
	}
}