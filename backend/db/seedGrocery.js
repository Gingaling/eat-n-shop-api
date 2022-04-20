const mongoose = require('../db/connections.js');

// import Grocery Model

const Grocery = require('../models/Grocery');

const grocerySeeds = require('../db/grocerySeeds.json');

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
