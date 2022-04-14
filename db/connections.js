require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL;

const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on('error', err => console.log(err.message + ' is MongoDB not running?'));
db.on('connected', () => console.log('MongoDB connected at: ', mongoURI));
db.on('disconnected', () => console.log('MongoDB disconnected'));

db.on('open', () => {
	console.log('✅ MongoDB connection made!🧜‍♀️');
});

module.exports = mongoose;
