const { InsufficientStorage } = require('http-errors');
var db = require('./db_connection');


exports.select = function(callback){

    //TODO : Select User return
    let select_query = ' SELECT * FROM library.user ';
    let query_result = "";
    db.query(select_query, function(err, rows, fields){
        if (err) throw err;

        console.log(rows);
        

        return rows;
    });
}

exports.select_one = function(usernum){
    //if name + email or name + phone or phone + email

    let query_result = [];

    let select_one_query = ' SELECT * FROM library.user where USERNUM = ? ';
    db.query(select_one_query, usernum, function(err, rows, fields){

        if (err) throw err;
        //console.log(rows); //없으면 [] 로 return 됨
        query_result.push(rows);

    });

    //console.log(query_result);


}

exports.insert =  function(value, next){

    let query = "INSERT INTO library.user (USER_NAME, USER_EMAIL, USER_PHONE) VALUES(?, ?, ?)";

    db.query(query, value, function(err, result){
        if (err) throw err;
        console.log(result);
        console.log('insert done');
    });

}

exports.update = function(update_value){

    console.log(update_value);
    console.log(update_value[0]); //usernum
    console.log(update_value[1]); //username
    console.log(update_value[2]); //useremail
    console.log(update_value[3]); //userphone

    let param_value;

    if (update_value[3] == ''){
        query = " UPDATE library.user SET USER_EMAIL = ? WHERE USERNUM = ? ";
        param_value = [update_value[2], update_value[0]];
    }
     
    else if(update_value[2] == ''){ 
        query = " UPDATE library.user SET USER_PHONE = ? WHERE USERNUM = ? ";
        param_value = [update_value[3], update_value[0]]
    }
    else {
        query = " UPDATE library.user SET USER_EMAIL = ?, USER_PHONE = ? WHERE USERNUM = ? ";
        param_value = [update_value[2], update_value[3], update_value[0]];
    }

    console.log(param_value);

    db.query(query, param_value, function(err, result){
        if(err) throw err;

        console.log(result);
        console.log('update done');
    });



}

exports.delete = function(usernum){

    let query = " DELETE FROM library.user WHERE USERNUM = ?";

    db.query(query, usernum, function(err, result){

        if (err) throw err;
        console.log(result);


        console.log('delete done');

    });



}

