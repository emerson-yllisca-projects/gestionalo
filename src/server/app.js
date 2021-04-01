const express = require('express');
const cors = require('cors');
const app = express();
//Configurar CORS
app.use(cors());

//lectura y parseo de body
app.use(express.json());

//Directorio Publico
app.use(express.static('public'))

app.use('/api', require('../routes/routes'))

module.exports = app;