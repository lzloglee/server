import express from 'express';
import { getCompetence } from '../modules/user.js';

const router = express.Router();

// 在/api/getAccountList来获取数据库下的所有数据 
router.get('/api/getCompetence', (req, res) => {
    getCompetence((result) => {
        result &&
            res.send({
                code: 1,
                msg: '列表获取成功',
                data: result
            }) ||
            res.send({
                code: 0,
                msg: '获取失败',
                data: []
            })
    })
})

export default router