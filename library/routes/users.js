var express = require('express');
const AuthService = require('../services/auth');
var userRouter = express.Router();
const users = require('../services/auth');


userRouter.get('/sign_up',(req) =>{

    console.log("sign_up");

});

userRouter.post('/sign_up', async (req, res, next)=>{

    const userInform = req.body;

    console.log(userInform);
    const auth = new AuthService(userInform);


    const now_time = Math.round((new Date().valueOf()* Math.random())) + "";

    try{
    const result = await auth.sign_up(now_time);
    return res.status(201).json("hello world");

    }catch(e){
        console.log("catch error");
        return next(e);

    }


});


userRouter.post('/sign_in', (req, res, next) => {


    console.log("hello sign in");
    console.log(req.body);
    

});

module.exports = userRouter;