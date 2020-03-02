var userSql = require('../sql/user.js');
var db = require('../config/index.js');
function getUser(req,res,callback){
    db.queryArgs(userSql.selectOneByName, req.body.username,function (result) {
        callback(result);
    });
}
function getUserById(req,res,callback){
    db.queryArgs(userSql.selectOne, req.cookies.userId,function (result) {
        callback(result);
    });
}
function addUser(req,res,callback){
    db.queryArgs(userSql.insertOne, [req.body.username,req.body.password,req.body.remark],function (result) {
        callback(result);
    });
}

module.exports = {
    getUser:getUser,
    addUser:addUser,
    getUserById:getUserById
}