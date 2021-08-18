var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

const {swaggerUi, specs} = require('./utils/swagger');

const models = require('./models/index.js');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

const corsOptions = {
  origin : 'http://localhost:3001',
  credential : true
}


//sequelize sync method 

models.sequelize.sync().then(() => {
  console.log("DB Connect Success");

}).catch(err => {
  console.log("DB Connect Fail"); 
  console.log(err);
});


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("secret-key"));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs),{explorer : true});

module.exports = app;
