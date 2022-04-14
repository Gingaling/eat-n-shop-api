import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

function Form() {
	const navigate = useNavigate();
	const [grocery, setGrocery] = useState({
		name: '',
		howMuch: 0,
		eaten: 0,
		img: '',
		unitMeasure: '',
		purchased: false,
		type: 'grocery',
		Date: Date
	});

	const handleChange = event => {
		setGrocery({ ...grocery, [event.target.id]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(grocery);
		axios
			.post('https://eat-n-shop5.herokuapp.com/grocery', grocery)
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
				<div className="form-child">
					<div className="card-title">
						<p className="addGrocery">
							Add A Grocery or Record What You Have Eaten
						</p>
						<p className="library" />
					</div>
					<form onSubmit={handleSubmit} className="addForm">
						<div className="addDetails-container">
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
							<div className="subContainer">
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
											required
										/>
									</div>
								</div>
								<div className="eaten-container">
									<div className="eaten-label">
										<label htmlFor="eaten">amount eaten or used</label>
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
							</div>
							<div className="notRequired-container">
								<div className="notRequired-label">
									<p>Detail</p>
								</div>
								<div className="notRequired-input">
									<p>Optional</p>
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
										placeholder="http://exampleurl.com"
									/>
								</div>
							</div>
							<div className="film-container">
								<div className="film-label">
									<label htmlFor="filmAdaptation">Adapted To Film </label>
								</div>
								<div className="film-input">
									<input
										onChange={() => {
											setGrocery({
												...grocery,
												filmAdaptation: !grocery.filmAdaptation
											});
										}}
										checked={grocery.filmAdaptation}
										type="checkbox"
										id="filmAdaptation"
										value={grocery.filmAdaptation}
										placeholder="Adapted To Film"
										required
									/>
								</div>
							</div>
							<div className="synopsis-container">
								<div className="synopsis-label">
									<label htmlFor="description">Synopsis </label>
								</div>
								<div className="synopsis-input">
									<input
										onChange={handleChange}
										id="description"
										value={grocery.description}
										placeholder="Once upon a time..."
									/>
								</div>
							</div>
						</div>
						<div className="addGroceryButton-container">
							<button type="submit" className="addGroceryButton">
								Add to Inventory{' '}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Form;
