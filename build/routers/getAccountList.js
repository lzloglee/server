'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../modules/user.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// 在/api/getAccountList来获取数据库下的所有数据 
router.get('/api/getAccountList', function (req, res) {
    (0, _user.getAccountList)(function (result) {
        result && res.send({
            code: 1,
            msg: '列表获取成功',
            data: result
        }) || res.send({
            code: 0,
            msg: '获取失败',
            data: []
        });
    });
});

exports.default = router;