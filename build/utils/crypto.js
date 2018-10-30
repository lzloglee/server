'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aesDecrypt = exports.aesEncrypt = undefined;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aesEncrypt = function aesEncrypt(data, key) {
    var cipher = _crypto2.default.createCipher('aes192', key);
    var aesEn = cipher.update(data, 'utf8', 'hex');
    aesEn += cipher.final('hex');
    return aesEn;
};
var aesDecrypt = function aesDecrypt(aesEn, key) {
    var deCipher = _crypto2.default.createDecipher('aes192', key);
    var deAes = deCipher.update(aesEn, 'hex', 'utf8');
    deAes += deCipher.final('utf8');
    return deAes;
};
exports.aesEncrypt = aesEncrypt;
exports.aesDecrypt = aesDecrypt;