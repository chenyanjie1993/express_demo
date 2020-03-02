var sql={
    insertOne:'insert into password (userId,password,type,remark) values (?,?,?,?)',
    deleteOne:'delete from password where id = ?',
    updateOne:'update password set password = ?,type = ?,remark = ? where id = ?',
    selectOneByUser:'SELECT a.id,a.password,b.id as typeId,b.name as typeName,a.remark,a.createTime,a.updateTime FROM `password`as a LEFT JOIN type as b on a.type=b.id where a.userId = ? ORDER BY updateTime DESC',
    selectAll:'select * from password',
    selectOneByName:'select * from password where username = ?',
}
module.exports=sql
