import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({ genre }) {
	const [searchGenre, setSearchGenre] = useState('');
	function handleSelect(e) {
		setSearchGenre(e.target.value);
		console.log(searchGenre);
	}

	return <main id="main-content">
			<div id="grocery-container">
				<div>
					<h2 className="home-CTA">Keeping Track of Your Cupboard & Cooking for <span>Smarter Shopping</span> </h2>
				</div>
				<div id="top-nav-bar-">
					<nav className="navs" id="nav-genres">
						<ul className="nav-ul">
							<Link to="/list">
								<li className="navs">Current Inventory</li>
							</Link>
							<Link to="/eaten">
								<li className="navs">What I Have Eaten</li>
							</Link>
							<Link to="/add-grocery">
								<button id="add-grocery">Add a grocery or record your eating</button>
							</Link>
						</ul>
					</nav>
				</div>
				{/* <form action="" onChange={handleSelect} className="home-form">
					<label htmlFor="selectGrocery">Choose a grocery item:</label>
					<select name="selectGrocery" id="selectGrocery" className="drop-down">
						<option value="" className="option">
							Select..
						</option>
						<option value="Milk" className="option">
							Milk
						</option>
						<option value="Eggs" className="option">
							Eggs
						</option>
						<option value="Carrots" className="option">
							Carrots
						</option>
						<option value="Bread" className="option">
							Bread
						</option>
						<option value="Soda" className="option">
							Soda
						</option>
					</select>
				</form> */}
				<img id="splash-image" src="https://cdn.pixabay.com/photo/2012/04/03/22/49/fruits-25266_960_720.jpg" alt="" id="grocery-img" />
			</div>
		</main>;
}
