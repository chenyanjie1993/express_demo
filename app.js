var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var loadRoute=require('./untils/index.js');
// var bodyParser=require('body-parser');

var ejs=require('ejs');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  if(req.cookies.userId){
    next()
  }else{
    if(req.path=="/user/login"||req.path=="/user/register"||req.path=="/user/checkLogin"){
      next()
    }else{
      res.json({
        code:'10001',
        msg:"当前未登录",
        result:""
      })
    }
  }
})


loadRoute.init(app);


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
  res.render('error');
});

module.exports = app;
