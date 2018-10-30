import express from 'express';
import { getAllcarts } from '../modules/user';

const router = express.Router();

router.get('/api/getAllcarts', (req, res) => {
    getAllcarts((result) => {
        res.send({
            code: 1,
            msg: '获取成功',
            data: result || []
        })
    })
})

export default router