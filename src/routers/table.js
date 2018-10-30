import express from 'express';
import { tablePage } from '../modules/user';
import url from 'url';
const router = express.Router();

router.get('/api/table', (req, res) => {
    const tabpage = url.parse(req.url, true).query;
    tablePage(tabpage,function(result){
        result
            &&
            res.send({
                code: 1,
                msg: '获取成功',
                data: result
            })
            ||
            res.send({
                code: 0,
                msg: '获取失败'
            })
    })
})

export default router