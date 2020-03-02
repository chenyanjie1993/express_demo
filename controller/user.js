let model = require('../model/user.js');
let api = {
    login(req, res, next) {
        model.getUser(req, res, (result) => {
            if (result.code == "0") {
                if (result.data.length) {
                    if (result.data[0].password == req.body.password) {
                        res.cookie("userId", result.data[0].id, {
                            path: '/',
                            maxAge: 1000 * 60 * 60
                        });
                        res.json({
                            code: '0',
                            msg: "登录成功"
                        })
                    } else {
                        res.json({
                            code: '1',
                            msg: "密码错误"
                        })
                    }

                } else {
                    res.json({
                        code: '1',
                        msg: "该用户名不存在"
                    })
                }
            } else {
                res.json(result)
            }
        })
    },
    register(req, res, next) {
        new Promise((resolve, reject) => {
            model.getUser(req, res, (result) => {
                if (result.code == "0") {
                    if (result.data.length) {
                        res.json({
                            code: '1',
                            msg: "用户已存在"
                        })
                    } else {
                        resolve(result)
                    }
                } else {
                    res.json(result)
                }
            })

        }).then((result) => {
            if (!result.data.length) {
                model.addUser(req, res, (result) => {
                    if (result.code == '0') {
                        res.cookie("userId", result.data.insertId, {
                            path: '/',
                            maxAge: 1000 * 60 * 60
                        });
                    }
                    res.json(result)

                })
            }
        })
    },
    checkLogin(req, res, next) {
        if (req.cookies.userId) {
            model.getUserById(req, res, (result) => {
                if (result.code == "0") {
                    res.cookie("userId", result.data[0].id, {
                        path: '/',
                        maxAge: 1000 * 60 * 60
                    });
                    res.cookie("userName", result.data[0].username, {
                        path: '/',
                        maxAge: 1000 * 60 * 60
                    });
                    res.json({
                        code: '0',
                        msg: "用户已登录",
                        data: result.data[0]
                    })
                } else {
                    res.json(result)
                }
            })
        } else {
            res.json({
                code: '1',
                msg: "用户未登录，请先登录！"
            })
        }
    },
    logout(req, res, next) {
        if (req.cookies.userId) {
            res.cookie("userId", "", {
                path: '/',
                maxAge: -1
            });
            res.cookie("userName", "", {
                path: '/',
                maxAge: -1
            });
            res.json({
                code: '0',
                msg:'登出成功'
            })
        }else{
            res.json({
                code:'10001',
                msg:"当前未登录",
                result:""
            })
        }
        
    }
}
module.exports = api