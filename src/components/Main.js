import React from 'react';

import mockData from '../utils/mockData'

export default function() {
	return (
		<div>
			{ mockData.map(function(data, index) {
				return (
					<article>
						{ data.title }
					</article>
				);
			}) }
		</div>
	);
}