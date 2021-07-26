var express = require('express');
var userRouter = express.Router();



userRouter.post('/sign_up', (req, res, next)=>{

    console.log(req.body);

    const auth = new AuthService();


});

module.exports = userRouter;