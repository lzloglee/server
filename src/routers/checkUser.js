import express from 'express';
import { checkUser } from '../modules/user';
import { aesEncrypt, aesDecrypt } from '../utils/crypto.js';
const router = express.Router();

const e = 7200;
let sTime = new Date().getTime() / 1000;
let eTime;

router.post('/api/checkUser', (req, res) => {
    checkUser(req.body, (result) => {
        // 如果result返回为true
        result
            &&
            // 则发送成功的result，并且新加一个token并加密
            res.send({
                code: result,
                msg: '登录成功',
                name: req.body.username,
                token: aesEncrypt(req.body.username, 'lvze')
            }) ||
            // 则发送失败的result，并且不添加token
            res.send({
                code: result,
                msg: '登录失败',
                name: req.body.username
            })
    })

});
export default router;