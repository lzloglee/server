'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _crypto = require('./utils/crypto.js');

var _router = require('./config/router.js');

var _router2 = _interopRequireDefault(_router);

var _proof = require('./utils/proof');

var _proof2 = _interopRequireDefault(_proof);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_express2.default.static('../root/'));
app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-Type,Accept,token,sysCode');
    res.header('Access-Control-Allow-Methods', 'POST,GET');
    res.header('X-Powered-By', '3.2.1');
    res.header('Content-Type', 'application/plain;charset=utf-8');
    next();
});
app.use(_proof2.default);
(0, _router2.default)(app);
app.listen(8080, function () {
    console.log('listen to 8080......');
});