'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _user = require('../modules/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/addcart', function (req, res, next) {
    console.log(req.url);
    var produ = _url2.default.parse(req.url, true).query;
    (0, _user.addcart)(produ, function (code) {
        res.send({
            code: 1,
            msg: '请求成功'
        });
    });
});

exports.default = router;