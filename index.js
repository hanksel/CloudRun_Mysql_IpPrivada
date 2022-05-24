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