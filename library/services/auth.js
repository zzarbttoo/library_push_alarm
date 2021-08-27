const argon2 = require('argon2');
const models = require('../models');

class AuthService{

    constructor(userInform){
        this.userInform = userInform;
    }
    
    async sign_in(){

        const userRecord = await models.user.findOne({
            where : {
            USER_EMAIL : this.userInform.user_email
            }
        });

        if (userRecord == null) throw new Error("등록된 계정이 아닙니다");

        const given_password = this.userInform.user_password;
        if (await argon2.verify(userRecord.dataValues.USER_PASSWORD, given_password)){

            const user = userRecord.dataValues;

            Reflect.deleteProperty(user, "SALT");
            Reflect.deleteProperty(user, "USER_PASSWORD");

            //console.log("user ::: " + user.USER_EMAIL);
            //console.log("user ::: " + user.USER_PASSWORD);

            return user;

        }else{
            throw new Error("비밀번호가 일치하지 않습니다");
        }
    }

    async sign_up(salt){


        const given_password = this.userInform.user_password;
        const hashedPassowrd = await argon2.hash(given_password, salt);

        const userRecord = await models.user.create({

            USER_NAME : this.userInform.user_name, 
            USER_EMAIL : this.userInform.user_email,
            USER_PHONE : this.userInform.user_phone,
            USER_PASSWORD : hashedPassowrd,
            SALT : salt.toString('hex')

        }).then(() => {

            console.log(userRecord);
            return "Sign up Success";

        }).catch((err) => {

            console.log("회원 가입 에러");
            throw "Error";
        })
    }

    async sign_out(){

        return "helloworld";
    }



}

module.exports = AuthService;

