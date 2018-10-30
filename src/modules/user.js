import connection from './config.js';
const checkUser = (userInfo, ck) => {
    // 在数据库查询user字段的数据
    connection.query('select * from checkuser where user = ?', userInfo.username, function (req, result) {
        let check = result ? result.some(function (item) {
            return item.pass == userInfo.password
        }):1;
        ck(check)
    })
}
const getAccountList = (ck) => {
    // 数据库查询所有的数据
    connection.query('select * from checkuser', function (req, result) {
        ck(result)
    })
}
const getAllcarts = (ck) => {
    connection.query('select * from shopcart', function (req, result) {
        ck(result)
    })
};
// 路由列表
const getCompetence = (ck) => {
    connection.query('select * from competence', function (req, result) {
        result.map(item => {
            ck(item.data)
        })
        
    })
};

// 查询表格
const operation = (page, ck) => {
    connection.query(`select * from operation limit ${page.pageIndex},${page.pageNum}`, function (req, result) {
        ck(result)
    })
};

// 更改数据库的数据
const addcart = (produ, ck) => {
    connection.query(`update shopcart set num = ${produ["num"]} where id = ${produ["pid"]}`, (err, result) => {
        ck(result)
    })
}
const tablePage = (tabpage, ck) => {
    connection.query(`select * from tablepage limit ${tabpage.pageIndex},${tabpage.pageNum}`, function (req, result) {
        ck(result)
    })
}
export {
    checkUser,
    getAccountList,
    getAllcarts,
    addcart,
    tablePage,
    getCompetence,
    operation
}