const roteador = require('express').Router();

roteador.get('/', async (req,res) => {
    const resultados = await TabelaTask.listar()

})