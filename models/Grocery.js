const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

// Schema of grocery item

const GrocerySchema = new Schema({
	name: { type: String, require: true },
	howMuch: { type: Integer, default = 0 },
	eaten: { type: Integer, default = 0 },
	img: String,
	unitMeasure: String, 
    purchased: Boolean,
    type: String
});

const Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery;
