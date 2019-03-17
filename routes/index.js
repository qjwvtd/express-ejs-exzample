var express = require('express');
var router = express.Router();

/**
 * 配置所有路由
 */
module.exports = function(app){

    /* 设置导航active */
    var common = require('./../static/js/common');
    app.use(common.mainActive);

    /* 请求首页(求职意向). */
    var home = router.get('/', function(req, res, next) {
      res.render('index', {title: '求职意向' });
    });
    app.use(home);

    /* 请求self页(自我评价). */
    var self = router.get('/self', function(req, res, next) {
      res.render('self', {title: '自我评价' });
    });
    app.use(self);

    /* 请求work页(工作经历). */
    var work = router.get('/work', function(req, res, next) {
      res.render('work', {title: '工作经历' });
    });
    app.use(work);
    /* 请求project页(项目经历). */
    var project = router.get('/project', function(req, res, next) {
      res.render('project', {title: '项目经历' });
    });
    app.use(project);
}
