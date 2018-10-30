'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkUser = require('../routers/checkUser');

var _checkUser2 = _interopRequireDefault(_checkUser);

var _getAccountList = require('../routers/getAccountList');

var _getAccountList2 = _interopRequireDefault(_getAccountList);

var _getAllcarts = require('../routers/getAllcarts');

var _getAllcarts2 = _interopRequireDefault(_getAllcarts);

var _addcart = require('../routers/addcart');

var _addcart2 = _interopRequireDefault(_addcart);

var _table = require('../routers/table');

var _table2 = _interopRequireDefault(_table);

var _getCompetence = require('../routers/getCompetence');

var _getCompetence2 = _interopRequireDefault(_getCompetence);

var _operation = require('../routers/operation');

var _operation2 = _interopRequireDefault(_operation);

var _Upload = require('../routers/Upload');

var _Upload2 = _interopRequireDefault(_Upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.post('/api/checkUser', _checkUser2.default);
    app.get('/api/getAccountList', _getAccountList2.default);
    app.get('/api/getAllcarts', _getAllcarts2.default);
    app.get('/api/addcart', _addcart2.default);
    app.get('/api/table', _table2.default);
    app.get('/api/getCompetence', _getCompetence2.default);
    app.get('/api/operation', _operation2.default);
    app.post('/upload', _Upload2.default);
};