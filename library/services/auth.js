const argon2 = require('argon2');
const models = require('../models');

class AuthService{

    constructor(userInform){
        this.userInform = userInform;
    }
    
    async sign_in(){

        return "helloworld";
    }

    async sign_up(salt){

        console.log("time1 ::: " + new Date());

        const given_password = this.userInform.user_password;
        const hashedPassowrd = await argon2.hash(given_password, salt);

        console.log("time2 ::: " + new Date());

        const userRecord = await models.user.create({

            USER_NAME : this.userInform.user_name, 
            USER_EMAIL : this.userInform.user_email,
            USER_PHONE : this.userInform.user_phone,
            USER_PASSWORD : hashedPassowrd,
            SALT : salt.toString('hex')

        }).then(() => {

            return "Sign up Success";

        }).catch((err) => {

            console.log("내부에서는 Error 잡음");
            throw "Error";
        })

    }

    async sign_out(){

        return "helloworld";
    }



}

module.exports = AuthService;

