const express = require('express');
const { Client } = require('pg');
const app = express();

//Coneccion con la bd local de pgadmin4
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Imagenes',
  password: '123',
  port: 5432,
});
client.connect();
// routes
app.use(require('./routes/index'));


//iniciador de server
app.listen(3000, () => {
  console.log('API listening on port 3000');
});