'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _crypto = require('../utils/crypto.js');

var e = 7200000;
var sTime = void 0;
var eTime = void 0;

exports.default = function (req, res, next) {
    var token = req.headers.token;
    // 首次进入接口，并且我的接口在/api/checkUser之下

    if (!token && req.url === '/api/checkUser') {
        sTime = new Date().getTime() / 1000;
        next();
        // 首次进入非/api/checkUser则返回一个信息
    } else if (!token && req.url !== '/api/checkUser') {
        res.send({
            code: 0,
            msg: '无权限访问'
        });
        // 多次进入登陆接口
    } else if (token && req.url === '/api/checkUser') {
        eTime = new Date().getTime() / 1000;
        var uid = (0, _crypto.aesDecrypt)(token, 'lvze');
        if (uid === req.body.username && eTime - sTime < e) {
            res.send({
                code: 1,
                msg: '登录成功'
            });
        } else {
            next();
        }
        // 多次进入非登陆接口
    } else if (token && req.url !== '/api/checkUser') {
        eTime = new Date().getTime() / 1000;
        // 解密的token值
        var _uid = (0, _crypto.aesDecrypt)(token, 'lvze');
        // 如果没有解密的token则无权限访问
        if (!_uid) {
            res.send({
                code: 0,
                msg: '无权访问'
            });
            // 如果时间大于e则跳转下一个
        } else if (eTime - sTime > e) {
            res.send({
                code: 0,
                msg: 'token失效 请重新登录'
            });
        } else {
            next();
        }
    }
};