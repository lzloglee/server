import express from 'express';
// import { queryRoleList } from '../modules/Role';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';
const router = express.Router();
router.post('/upload', function(req, res, next) {
    const form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'binary';        //设置编辑
    form.uploadDir = path.join(process.cwd(), 'root/uploaded');     //设置上传目录
    form.keepExtensions = true;     //保留后缀
    form.parse(req, (err, fileds, files) => {
        let inputFile = files.imgFile;
        let uploadedPath = inputFile.path;
        let dstPath = path.join(process.cwd() , 'root/uploaded' ,inputFile.name);
        console.log(inputFile.name)
        fs.rename(uploadedPath, dstPath, (err) => {
            if(err) {
                throw new Error('上传错误')
            }else{
                res.json({
                    code: 1,
                    msg: '上传成功',
                    img: 'http://localhost:8081/uploaded/' + inputFile.name
                })
            };
        })
    })
});
export default router
