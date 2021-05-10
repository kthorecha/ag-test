var mysql = require('mysql');

var mysqlPool = mysql.createPool({
    connectTimeout: 10000,
    host: "localhost",
    user: "root",
    password: "MyLocalDB",
    database: "agtest",
    port:3306
});

// default_authentication_plugin=mysql_native_password
mysqlPool.getConnection((err, conn) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected!");
    }
});

mysqlPool.on("error", (err) => {
    console.log(err.code);
});

module.exports = mysqlPool;