const mongoose = require('../db/connections');

// import Grocery Model

const Grocery = require('../backend/models/Grocery.js');

const grocerySeeds = require('../backend/db/grocerySeeds.json');

Grocery.deleteMany({})
	.then(() => {
		Grocery.insertMany(grocerySeeds)
			.then(grocery => {
				console.log('added grocery');
			})
			.catch(console.log.error)
			.finally(() => {
				process.exit;
			});
	})
	.catch(err => console.error(err));
