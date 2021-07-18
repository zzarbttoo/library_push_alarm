import express from 'express';
var router = express.Router();
var request = require('request');
var secret_config = require('../secret.json');
var library_config = secret_config.library_date;
const url = library_config.url 
+ "/" + library_config.token 
+ "/" + library_config.type 
+ "/" + library_config.service 
+ "/" + library_config.first_index 
+ "/" + library_config.last_index;

router.get("/date", function(req, res, next){

    request(url, function(error, response, body){
        if(!error && response.statusCode == 200 ){
            let library_list = JSON.parse(body).SeoulPublicLibraryInfo;

            res.send(library_list);

        }
    });
});


module.exports = router; //모듈로 송출할 값






