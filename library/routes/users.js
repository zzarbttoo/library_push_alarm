var express = require('express');
var router = express.Router();
var url = require('url');

var user_db = require('../database/user_db');


/* GET users listing. */
router.get('/select', function(req, res, next) {


  console.log(user_db.select());
  res.send('respond with a resource');
});


router.post('/insert', function(req, res, next){

  let jsondata = req.body;
  let value = [jsondata.user_name, jsondata.user_email, jsondata.user_phone];

  // TODO : 기존 회원 확인 

  user_db.insert(value, next);

   res.send('insert success');

 });

router.put('/update', function(req, res, next){

  let jsondata = req.body;
  let update_value = [jsondata.user_id, jsondata.user_name, jsondata.user_email, jsondata.user_phone];

  // TODO : 기존 회원 확인 

  // update //email, phone_number만 바꿀 수 있도록 한다 
  user_db.update(update_value);


});

router.delete('/delete/:usernum', function(req, res, next){


  let usernum = req.params.usernum;
  //user_name, user_number, user_email -> select user_number

  console.log(usernum);
  //delete user_number
  user_db.delete(usernum);


  


});

router.get('/selectone/:usernum', function(req, res, next){

  let usernum = req.params.usernum;

  console.log(user_db.select_one(usernum));

});




module.exports = router;
