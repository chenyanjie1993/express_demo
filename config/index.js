var mysql = require('mysql');
var dbConfig = require('./db_config.js');
const pool=mysql.createPool(dbConfig);
function responseDoReturn(err,ret) {
    let result={};
    if(err) {
		result={
			code:'100',
			msg: 'err'+err
		};
	} else {       
		result={
            code:'0',
            msg: 'succrss',
            data:ret
        }
    }
    return result
};
 
/**
 * 封装query之sql带不占位符func
 */
function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        if(err){          
            callback(responseDoReturn(err,null));
        }else{
            connection.query(sql, function (err, rows) {
                connection.release();
                callback(responseDoReturn(err,rows));                
            });
        }
      
    });
}
 
/**
 * 封装query之sql带占位符func
 */
function queryArgs(sql,args, callback) {
    pool.getConnection(function (err, connection) {
        if(err){           
            callback(responseDoReturn(err,null));
        }else{
            connection.query(sql, args,function (err, rows) {
                connection.release();
                callback(responseDoReturn(err,rows));  
                    
            });
        }
      
    });
}
 
//exports
module.exports = {
    query: query,
    queryArgs: queryArgs,
}