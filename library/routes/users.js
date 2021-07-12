var express = require('express');
var router = express.Router();

var user_db = require('../database/user_db');


/* GET users listing. */
router.get('/select', function(req, res, next) {

  
  console.log(user_db);
  console.log(user_db.select);

  res.send('respond with a resource');
});


router.post('/insert', function(req, res, next){

  res.send('insert success');

});

router.put('/update', function(req, res, next){

});

router.delete('/delete', function(req, res, next){


});

module.exports = router;
