const express = require('express');
const router = express.Router();

const Grocery = require('../models/Grocery');

// Get all Grocery Items

router.get('/', async (req, res) => {
	try {
		const grocery = await Grocery.find();
		if (grocery) {
			res.json(grocery);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.log(error);
	}
});

// Get Grocery by ID

router.get('/:_id', async (req, res) => {
	try {
		const grocery = await Grocery.findById(req.params.id);
		if (grocery) {
			res.json(grocery);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		console.log(error);
	}
});

// create new Grocery

router.post('/', (req, res) => {
	const newGrocery = req.body;
	Grocery.create(newGrocery).then(grocery => {
		res.json(grocery);
	});
});

// Update Grocery by Id

router.put('/:_id', async (req, res) => {
	try {
		const updatedGrocery = req.body;
		const updatedDocument = await Grocery.findByIdAndUpdate(
			req.params.id,
			updatedGrocery,
			{ new: true }
		);
		res.json(updatedDocument);
	} catch (error) {
		console.log(error);
	}
});

//  Delete Grocery by ID

router.delete('/:_id', async (req, res) => {
	try {
		const deleteGrocery = await Grocery.findByIdAndDelete({
			_id: req.params.id
		});
		res.json(deleteGrocery);
	} catch (error) {
		console.log.error;
	}
});

//  Delete (Remove) Grocery by name

router.delete('/name', async (req, res) => {
	try {
		const deleteGrocery = await Grocery.findOneAndRemove({
			name: req.params.name
		});
		res.json(deleteGrocery);
	} catch (error) {
		console.log.error;
	}
});

module.exports = router;
