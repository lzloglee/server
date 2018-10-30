import checkUser from '../routers/checkUser';
import getAccountList from '../routers/getAccountList';
import getAllcarts from '../routers/getAllcarts';
import addcart from '../routers/addcart';
import table from '../routers/table';
import getCompetence from '../routers/getCompetence';
import operation from '../routers/operation';
import upload from '../routers/Upload';
export default (app) => {
    app.post('/api/checkUser', checkUser)
    app.get('/api/getAccountList', getAccountList)
    app.get('/api/getAllcarts', getAllcarts)
    app.get('/api/addcart', addcart)
    app.get('/api/table',table)
    app.get('/api/getCompetence',getCompetence)
    app.get('/api/operation',operation)
    app.post('/upload',upload)

}