var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.render('result_2');
 });


module.exports = router;
