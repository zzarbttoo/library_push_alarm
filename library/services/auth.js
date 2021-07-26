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


        const given_password = this.userInform.user_password;
       
        //hash 알고리즘 
        try{

            const hashedPassowrd = await argon2.hash(given_password, salt);

            models.user.create({

                USER_NAME : this.userInform.user_name, 
                USER_EMAIL : this.userInform.user_email,
                USER_PHONE : this.userInform.user_phone,
                USER_PASSWORD : hashedPassowrd,
                SALT : salt.toString('hex')

            })

            // .then(()=>{
            //     console.log("insert success");
            //     return "success";
            // })
            // .catch(err => {
            //     console.log("이미 있는 아이디입니다");
            //     throw err;
            // });

        }catch(err){
            return "error in hashing Passowrd";
        }

    }

    async sign_out(){

        return "helloworld";
    }



}

module.exports = AuthService;

