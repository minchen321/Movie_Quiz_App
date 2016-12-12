var express = require('express');
var router = express.Router();
// var data = require('../themoviedb_data.json');

// Get Quiz Page
router.get('/', function(req, res){
	res.render('home');
});

// router.post('/', function(req, res) {
// 		res.redirect('/quiz');
// });

router.use('/quiz', require('./quiz'));
router.use('/result', require('./result'));
router.use('/result_2', require('./result_2'));
router.use('/question_1', require('./question_1'));
router.use('/question_2', require('./question_2'));
router.use('/pass', require('./pass'));
router.use('/pass_transition', require('./pass_transition'));

module.exports = router;
