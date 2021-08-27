const express = require('express');
const AuthService = require('../services/auth');
const userRouter = express.Router();
const users = require('../services/auth');
const {celebrate, Joi, errors, Seg, Segments} = require('celebrate');

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
        //res.redirect("/users/sign_in");


    }).catch((err) => {
        console.log('err ::: ' + err);
    });

});

userRouter.get('/sign-in',(req, res, next) =>{

    console.log("sign_in");

});


userRouter.post('/sign-in', celebrate({
[Segments.BODY] : Joi.object().keys({
    user_email : Joi.string().required(),
    user_password : Joi.string().required()
})
}),async (req, res, next) => {

    const userInform = req.body;
    const auth = new AuthService(userInform);

    await auth.sign_in().then((result) => {

        console.log("result type ::: " + typeof(result));
        res.cookie("user", JSON.stringify(result), {signed:true});
        console.log('result ::: ' + result);
        res.status(200).send('로그인 성공');


    }).catch((err) => {

        console.log('err ::: ' + err.message);
        res.status(500).send(err.message);
    });

});


userRouter.get('/sign-out', async(req, res, next) =>{

    console.log(req.signedCookies);

    if (req.cookies != null){
        console.log("로그아웃 됐습니다");
        res.clearCookie('user')
        //res.redirect('/users/sign_in');

    }else{
        console.log("로그인 상태가 아닙니다");
    }

});

// userRouter.get("/cookie_test" , (req, res, next) =>{
//     console.log(req.cookies);
//     console.log(req.signedCookies);

//     res.send("cookie_test");
// });



module.exports = userRouter;