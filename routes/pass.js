var express = require('express');
var router = express.Router();
var api = require('../controller/pass.js');
router.post('/addPass', function (req, res, next) {
    api.addPass(req, res, next)
});
router.get('/getPass', function (req, res, next) {
    api.getPass(req, res, next)
});
router.post('/editPass', function (req, res, next) {
    api.editPass(req, res, next)
});
router.get('/deletePass', function (req, res, next) {
    api.deletePass(req, res, next)
});

module.exports = router;