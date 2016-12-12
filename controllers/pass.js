var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
 res.render('pass');
});

module.exports = router;
