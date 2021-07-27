var express = require('express');
const AuthService = require('../services/auth');
var userRouter = express.Router();
const users = require('../services/auth');
const {celebrate, Joi, errors, Seg} = require('celebrate');


userRouter.get("/sign_up", () =>{

    //화면 이동
});

//TODO : celebrate를 이용해 받은 값에 대한 유효성 검사(이메일, 전화번호 특히)
userRouter.post('/sign_up', async (req, res, next)=>{

    const userInform = req.body;
    const auth = new AuthService(userInform);

    const now_time = Math.round((new Date().valueOf()* Math.random())) + "";
 
    await auth.sign_up(now_time).then(() => {

        console.log("Sign up success");
        res.redirect("/users/sign_in");


    }).catch((err) => {
        console.log(err);
    });

});

userRouter.get('/sign_in',(req, res, next) =>{

    //화면 이동
    console.log("sign_in");

});


userRouter.post('/sign_in', async (req, res, next) => {

    const userInform = req.body;
    const auth = new AuthService(userInform);


    await auth.sign_in().then((result) => {

        console.log(result);

    }).catch((err) => {

        console.log("비밀번호 불일치");

    });

});

module.exports = userRouter;