'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// import { queryRoleList } from '../modules/Role';

router.post('/upload', function (req, res, next) {
    var form = new _formidable2.default.IncomingForm(); //创建上传表单
    form.encoding = 'binary'; //设置编辑
    form.uploadDir = _path2.default.join(process.cwd(), 'root/uploaded'); //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.parse(req, function (err, fileds, files) {
        var inputFile = files.imgFile;
        var uploadedPath = inputFile.path;
        var dstPath = _path2.default.join(process.cwd(), 'root/uploaded', inputFile.name);
        console.log(inputFile.name);
        _fs2.default.rename(uploadedPath, dstPath, function (err) {
            if (err) {
                throw new Error('上传错误');
            } else {
                res.json({
                    code: 1,
                    msg: '上传成功',
                    img: 'http://localhost:8081/uploaded/' + inputFile.name
                });
            };
        });
    });
});
exports.default = router;