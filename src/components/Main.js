import React from 'react';

import mockData from '../utils/mockData';
import Article from './Article';

export default function() {
	return (
		<div className="col-md-8">
			{ mockData.map(function(data, index) {
				return (
					<Article key={ data.id } article={ data } />
				);
			}) }
		</div>
	);
}