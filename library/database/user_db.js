var db = require('./db_connection');

exports.select = function(){

    console.log(db);
    let query = ' SELECT * FROM user ';
    db.query(query, function(err, result, fields){
        if (err) throw err;
        console.log(result);
        console.log('select done');
    });
}

exports.insert =  function(values){

    console.log(values);

    let query = "INSERT INTO user (USER_NAME, USER_EMAIL, USER_PHONE) VALUES ?";

    db.query(query, values, function(err, results){
        if (err) throw err;
        console.log(result);
        console.log('insert done');
    });

}

exports.update = function(){

}