var user_sql={
    insertOne:'insert into user (username,password,remark) values (?,?,?)',
    deleteOne:'delete from user where id = ?',
    updateOne:'update user set username = ?,password = ?,remark = ? where id = ?',
    selectOne:'select * from user where id = ?',
    selectAll:'select * from user',
    selectOneByName:'select * from user where username = ?',
}
module.exports=user_sql
