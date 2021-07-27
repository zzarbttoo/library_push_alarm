var express = require('express');
const AuthService = require('../services/auth');
var userRouter = express.Router();
const users = require('../services/auth');
const {celebrate, Joi, errors, Seg} = require('celebrate');


userRouter.get('/sign_up',(req) =>{

    console.log("sign_up");

});


//TODO : celebrate를 이용해 받은 값에 대한 유효성 검사(이메일, 전화번호 특히)
userRouter.post('/sign_up', async (req, res, next)=>{

    const userInform = req.body;

    console.log(userInform);
    const auth = new AuthService(userInform);

    const now_time = Math.round((new Date().valueOf()* Math.random())) + "";

 


    await auth.sign_up(now_time).then(() => {

        console.log("외부에서 성공으로 인식");

    }).catch((err) => {
        console.log("no way");

    });


    // const result = await auth.sign_up(now_time).catch(
    //     () => {
    //         console.log("hello error");
    //     }
    // ).then(
    //     () => {

    //         console.log("hello world");
    //     }

    // );
    

    // try{

    // const result = await auth.sign_up(now_time);

    // }catch(e){
    //     console.log("catch error");
    //     return next(e);
    // }


});


userRouter.post('/sign_in', (req, res, next) => {


    console.log("hello sign in");
    console.log(req.body);
    

});

module.exports = userRouter;