var express = require('express');
var router = express.Router();
var api=require('../controller/user.js');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  api.login(req, res, next)
});
router.post('/register', function(req, res, next) {
  api.register(req, res, next)
});
router.get('/checkLogin', function(req, res, next) {
  api.checkLogin(req, res, next)
});
router.get('/logout', function(req, res, next) {
  api.logout(req, res, next)
});

module.exports = router;
