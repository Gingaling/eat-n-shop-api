import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

export default function GroceryOnHandList() {
	const [groceryOnHandList, setGroceryOnHandList] = useState([]);
	const { type } = useParams();
	useEffect(
		() => {
			fetch(`https://eat-n-shop4.herokuapp.com/grocery/type/${type}`)
				.then(response => {
					return response.json();
				})
				.then(data => {
					setGroceryOnHandList(data);
				})
				.catch(error => {
					console.log('error');
				});
		},
		[type]
	);

	return (
		<div key="">
			<div className="grocery-on-hand-container">
				{groceryOnHandList &&
					groceryOnHandList.map(GroceryOnHandList =>
						<div key={GroceryOnHandList._id}>
							<h2>
								{GroceryOnHandList.name} - {GroceryOnHandList.howMuch}
							</h2>
						</div>
					)}
			</div>
		</div>
	);
}
