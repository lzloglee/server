'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../modules/user');

var _crypto = require('../utils/crypto.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var e = 7200;
var sTime = new Date().getTime() / 1000;
var eTime = void 0;

router.post('/api/checkUser', function (req, res) {
    (0, _user.checkUser)(req.body, function (result) {
        // 如果result返回为true
        result &&
        // 则发送成功的result，并且新加一个token并加密
        res.send({
            code: result,
            msg: '登录成功',
            name: req.body.username,
            token: (0, _crypto.aesEncrypt)(req.body.username, 'lvze')
        }) ||
        // 则发送失败的result，并且不添加token
        res.send({
            code: result,
            msg: '登录失败',
            name: req.body.username
        });
    });
});
exports.default = router;