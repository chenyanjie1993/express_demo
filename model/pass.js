var Sql = require('../sql/pass.js');
var db = require('../config/index.js');
function addPass(req,res,callback){
    db.queryArgs(Sql.insertOne,[req.cookies.userId,req.body.password,req.body.type,req.body.remark],function (result) {
        callback(result);
    });
}

function getPass(req,res,callback){
    db.queryArgs(Sql.selectOneByUser,req.cookies.userId,function (result) {
        callback(result);
    });
}

function editPass(req,res,callback){
    db.queryArgs(Sql.updateOne,[req.body.password,req.body.type,req.body.remark,req.body.id],function (result) {
        callback(result);
    });
}

function deletePass(req,res,callback){
    db.queryArgs(Sql.deleteOne,req.param('id'),function (result) {
        callback(result);
    });
}


module.exports = {
    addPass,
    getPass,
    editPass,
    deletePass
}