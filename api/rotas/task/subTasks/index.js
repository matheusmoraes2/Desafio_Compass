const roteador = require('express').Router();
const Tabela = require('./TabelaSubTasks')


roteador.get('/', async (req,res) => {
    const subtasks = await Tabela.listar(req.params.idTask)
    res.send(
        JSON.stringify(subtasks)
    )

})

roteador.post('/' , async (req, res, proximo) => {

    const dadosRecebidos = req.body
    const subtasks = new SubTasks(dadosRecebidos)
    await subtasks.criar()

})