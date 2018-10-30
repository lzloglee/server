import mysql from 'mysql';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: "lvze"
})
connection.connect();

export default connection;