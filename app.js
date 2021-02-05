require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

app.use(indexRoutes);

app.get('/*', function (req, res) {
	res.render('404');
});

app.listen(process.env.PORT || 8080, () =>
	console.log(`Server started on port ${process.env.PORT || 8080}`)
);
