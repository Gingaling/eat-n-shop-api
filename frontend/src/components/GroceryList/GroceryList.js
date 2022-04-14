import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

export default function GroceryList() {
	const [groceryList, setGroceryList] = useState([]);
	const { type } = useParams();
	useEffect(
		() => {
			fetch(`https://eat-n-shop5.herokuapp.com//grocery/type/${""}`)
				.then(response => {
					return response.json();
				})
				.then(data => {
					setGroceryList(data);
				})
				.catch(error => {
					console.log('error');
				});
		},
		[type]           
	);

	return (
		<div key="">
			<div className="groceryList-container">
				{groceryList &&
					groceryList.map(GroceryList =>
						<div key={GroceryList.name}>
							<h2>
								{GroceryList.name} - {GroceryList.howMuch}
							</h2>
						</div>
					)}
			</div>
		</div>
	);
}
