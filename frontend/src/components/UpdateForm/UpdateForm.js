import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateForm.css';

export default function Form() {
	const navigate = useNavigate();
	const [grocery, setGrocery] = useState({
		name: '',
		howMuch: 0,
		eaten: 0,
		remaining: 0,
		minimum: 0,
		img: '',
		unitMeasure: '',
		purchased: false,
		type: 'grocery',
		Date: ''
	});

	const handleChange = event => {
		setGrocery({ ...grocery, [event.target.id]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(grocery);
		axios
			.post(`https://kitchen-count.herokuapp.com/grocery/`, grocery)
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					navigate('/');
				} else {
					alert(
						"We're sorry. We were not able to process your request. Please try again."
					);
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="master-container">
			<div className="form-container">
				<div className="titlealone">
					Add A Grocery or Record What You Have Eaten
				</div>
				<form onSubmit={handleSubmit}>
					<div className="name-container">
						<div className="name-label">
							<label htmlFor="name">name</label>
						</div>
						<div className="name-input">
							<input
								onChange={handleChange}
								type="text"
								id="name"
								value={grocery.name}
								placeholder="name of grocery or food"
								required
							/>
						</div>
					</div>
					<div className="howMuch-container">
						<div className="howMuch-label">
							<label htmlFor="howMuch">amount on hand</label>
						</div>
						<div className="howMuch-input">
							<input
								onChange={handleChange}
								id="howMuch"
								value={grocery.howMuch}
								placeholder="amount"
							/>
						</div>
					</div>
					<div className="eaten-container">
						<div className="eaten-label">
							<label htmlFor="eaten">amount consumed</label>
						</div>
						<div className="eaten-input">
							<input
								onChange={handleChange}
								id="eaten"
								value={grocery.eaten}
								placeholder="amount"
							/>
						</div>
					</div>
					<div className="minimum-container">
						<div className="minimum-label">
							<label htmlFor="minimum">my minimum</label>
						</div>
						<div className="minimum-input">
							<input
								onChange={handleChange}
								id="minimum"
								value={grocery.minimum}
								placeholder="amount"
							/>
						</div>
					</div>
					<div className="img-container">
						<div className="img-label">
							<label htmlFor="img">Grocery image</label>
						</div>
						<div className="img-input">
							<input
								onChange={handleChange}
								id="img"
								value={grocery.img}
								placeholder="http://image.png"
							/>
						</div>
					</div>
					<div className="unitMeasure-container">
						<div className="unitMeasure-label">
							<label htmlFor="unitMeasure">unit of measurement</label>
						</div>
						<div className="unitMeasure-input">
							<input
								onChange={handleChange}
								id="unitMeasure"
								value={grocery.unitMeasure}
								placeholder="unit"
							/>
						</div>
					</div>{' '}
					<div className="purchased-container">
						<div className="purchased-label">
							<label htmlFor="purchased">purchased?</label>
						</div>
						<div className="purchased-input">
							<input
								onChange={handleChange}
								id="purchased"
								value={grocery.purchased}
								placeholder="false"
							/>
						</div>
					</div>{' '}
					<div className="Date-container">
						<div className="Date-label">
							<label htmlFor="Date">date of activity</label>
						</div>
						<div className="Date-input">
							<input
								onChange={handleChange}
								id="Date"
								value={grocery.Date}
								placeholder="yyyy-mm-dd"
							/>
						</div>
					</div>
					<div className="type-container">
						<div className="type-label">
							<label htmlFor="type">type of grocery`</label>
						</div>
						<div className="type-input">
							<input
								onChange={handleChange}
								id="type"
								value={grocery.type}
								placeholder="type"
							/>
						</div>
					</div>
				</form>
				<div className="addGroceryButton">
					<button type="submit">Submit to Update </button>
				</div>
			</div>
		</div>
	);
}
