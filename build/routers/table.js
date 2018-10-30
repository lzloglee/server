'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../modules/user');

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/table', function (req, res) {
    var tabpage = _url2.default.parse(req.url, true).query;
    (0, _user.tablePage)(tabpage, function (result) {
        result && res.send({
            code: 1,
            msg: '获取成功',
            data: result
        }) || res.send({
            code: 0,
            msg: '获取失败'
        });
    });
});

exports.default = router;