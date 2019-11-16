const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '4200',
    database: 'blog_db',

});

pool.getConnection((err, connection) => {
    if(err){
        console.error("something went wrong with the database");
    }
    if(connection){
        connection.release();
    }
    return;
});


pool.query = util.promisify(pool.query);

module.exports = pool;