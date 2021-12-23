const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json());

const roteador = require('./rotas/task')
app.use('/api/task', roteador);

app.listen(3000, () => console.log('A API está funcionando!'));