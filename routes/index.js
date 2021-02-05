const express = require('express');
const router = express.Router();

let counter = 0;

router.get('/', function (req, res) {
	counter++;
	res.render('index', { count: counter });
});

module.exports = router;
