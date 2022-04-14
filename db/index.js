const express = require('express');
const app = express();
const cors = require('cors');
const groceryController = require('../controllers/groceryController');

app.set('port', process.env.PORT || 8000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.redirect('/grocery');
});

app.use('/grocery', groceryController);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
