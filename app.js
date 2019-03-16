var fs = require('fs'); 
var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var logger = require('morgan');
var createError = require('http-errors');
//配置路由
var routers = require('./routes/index');
routers(app);
//设置模板路径，模板引擎
app.set('views', path.join(__dirname, 'template'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
//日志
var accessLog = fs.createWriteStream('../access.log', {flags : 'a'});
//打印到控制台
app.use(logger('dev'));  
//打印到log日志  
app.use(logger('combined', {stream : accessLog}));
//使用json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//定位静态资源(js,img,css,font,...)到public
app.use(express.static(path.join(__dirname, 'static')));


//捕获404并转发到错误处理程序
app.use(function(req, res, next) {
  next(createError(404,'Not Found'));
});
//错误处理
app.use(function(err, req, res, next) {
  //设置局部变量，只提供开发环境中的错误
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  //发送错误页面
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
