var express = require('express');
const AuthService = require('../services/auth');
var userRouter = express.Router();
const users = require('../services/auth');



userRouter.post('/sign_up', (req, res, next)=>{


    const auth = new AuthService();

    console.log(auth.sign_up().then(console.log(val)));


});

module.exports = userRouter;