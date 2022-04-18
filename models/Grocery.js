const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

// Schema of grocery item

const GrocerySchema = new Schema({
	name: { type: String, require: true, unique: true },
	howMuch: { type: Number, default: 0 },
	eaten: { type: Number, default: 0 },
	remaining: {
		type: Number,
		default: function() {
			return this.howMuch - this.eaten
		}
	minimum: Number,
	unitMeasure: String,
	purchased: Boolean,
	Date: String,
	img: String,
	type: String
});

const Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery;
