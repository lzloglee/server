'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.operation = exports.getCompetence = exports.tablePage = exports.addcart = exports.getAllcarts = exports.getAccountList = exports.checkUser = undefined;

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkUser = function checkUser(userInfo, ck) {
    // 在数据库查询user字段的数据
    _config2.default.query('select * from checkuser where user = ?', userInfo.username, function (req, result) {
        var check = result ? result.some(function (item) {
            return item.pass == userInfo.password;
        }) : 1;
        ck(check);
    });
};
var getAccountList = function getAccountList(ck) {
    // 数据库查询所有的数据
    _config2.default.query('select * from checkuser', function (req, result) {
        ck(result);
    });
};
var getAllcarts = function getAllcarts(ck) {
    _config2.default.query('select * from shopcart', function (req, result) {
        ck(result);
    });
};
// 路由列表
var getCompetence = function getCompetence(ck) {
    _config2.default.query('select * from competence', function (req, result) {
        result.map(function (item) {
            ck(item.data);
        });
    });
};

// 查询表格
var operation = function operation(page, ck) {
    _config2.default.query('select * from operation limit ' + page.pageIndex + ',' + page.pageNum, function (req, result) {
        ck(result);
    });
};

// 更改数据库的数据
var addcart = function addcart(produ, ck) {
    _config2.default.query('update shopcart set num = ' + produ["num"] + ' where id = ' + produ["pid"], function (err, result) {
        ck(result);
    });
};
var tablePage = function tablePage(tabpage, ck) {
    _config2.default.query('select * from tablepage limit ' + tabpage.pageIndex + ',' + tabpage.pageNum, function (req, result) {
        ck(result);
    });
};
exports.checkUser = checkUser;
exports.getAccountList = getAccountList;
exports.getAllcarts = getAllcarts;
exports.addcart = addcart;
exports.tablePage = tablePage;
exports.getCompetence = getCompetence;
exports.operation = operation;