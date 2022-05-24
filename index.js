const express = require('express')
const mysql = require('promise-mysql')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	console.log('Conexion a mysql');
   createTcpPool (config);	
   console.log('Conexion establecida');
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const createTcpPool = async config => {

  // Establish a connection to the database
  return mysql.createPool({
    user: 'root', // e.g. 'my-db-user'
    password: 'Soporte2022#', // e.g. 'my-db-password'
    database: 'mysql', // e.g. 'my-database'
    host: '10.76.64.3', // e.g. '127.0.0.1'
    port: '3306', // e.g. '3306'
    // ... Specify additional properties here.
  });
};


const createPool = async () => {
  const config = {
    // [START cloud_sql_mysql_mysql_limit]
    // 'connectionLimit' is the maximum number of connections the pool is allowed
    // to keep at once.
    connectionLimit: 5,
    // [END cloud_sql_mysql_mysql_limit]

    // [START cloud_sql_mysql_mysql_timeout]
    // 'connectTimeout' is the maximum number of milliseconds before a timeout
    // occurs during the initial connection to the database.
    connectTimeout: 10000, // 10 seconds
    // 'acquireTimeout' is the maximum number of milliseconds to wait when
    // checking out a connection from the pool before a timeout error occurs.
    acquireTimeout: 10000, // 10 seconds
    // 'waitForConnections' determines the pool's action when no connections are
    // free. If true, the request will queued and a connection will be presented
    // when ready. If false, the pool will call back with an error.
    waitForConnections: true, // Default: true
    // 'queueLimit' is the maximum number of requests for connections the pool
    // will queue at once before returning an error. If 0, there is no limit.
    queueLimit: 0, // Default: 0
    // [END cloud_sql_mysql_mysql_timeout]

    // [START cloud_sql_mysql_mysql_backoff]
    // The mysql module automatically uses exponential delays between failed
    // connection attempts.
    // [END cloud_sql_mysql_mysql_backoff]
  };