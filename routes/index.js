var express = require('express');
var router = express.Router();

/**
 * 配置所有路由
 */
module.exports = function(app){

    /* 请求首页. */
    var home = router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });
    app.use(home);

    /* 请求user页. */
    var users = router.get('/users', function(req, res, next) {
      res.render('users', { title: 'Zhang Xiao Jun' });
    });
    app.use(users);

    /* 请求关于页. */
    var about = router.get('/about', function(req, res, next) {
      res.render('about', { title: 'about page' });
    });
    app.use(about);
}
