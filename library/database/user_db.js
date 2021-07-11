var db = require('./db_connection');

exports.select = function(){

    let query = ' SELECT * FROM user ';
    db.query(query, function(err, result, fields){
        if (err) throw err;
        console.log(result);
        console.log('select done');
    });
}

exports.insert =  function(){

}

exports.update = function(){

}