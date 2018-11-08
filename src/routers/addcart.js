import express from 'express';
import url from 'url';
import { addcart } from '../modules/user';
const router = express.Router();

router.get('/api/addcart', (req, res, next) => {
    const produ = url.parse(req.url,true).query;
    addcart(produ, (code) => {
        res.send({
            code: 1,
            msg: '请求成功'
        })
    })
})

export default router