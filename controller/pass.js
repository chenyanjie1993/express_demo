let model = require('../model/pass.js');
let api = {
    addPass(req, res, next) {
        if (req.cookies.userId) {
            model.addPass(req, res, (result) => {
                if (result.code == "0") {
                    res.json({
                        code: '0',
                        msg: "添加成功",
                        data: result.data
                    })
                } else {
                    res.json(result)
                }
            })
        } else {
            res.json({
                code: '10001',
                msg: "当前未登录",
                result: ""
            })
        }
    },
    getPass(req, res, next) {
        model.getPass(req, res, (result) => {
            res.json(result)
        })

    },
    editPass(req, res, next) {
        model.editPass(req, res, (result) => {
            if (result.code == "0") {
                res.json({
                    code: '0',
                    msg: "修改成功",
                    data: result.data
                })
            } else {
                res.json(result)
            }
        })
    },
    deletePass(req, res, next) {
        model.deletePass(req, res, (result) => {
            if (result.code == "0") {
                res.json({
                    code: '0',
                    msg: "删除成功",
                    data: result.data
                })
            } else {
                res.json(result)
            }
        })
    },

}
module.exports = api