const roteador = require('express').Router({ mergeParams: true });
const Tabela = require('./TabelaSubTasks')
const Sub = require('./SubTask')


roteador.get('/', async (req,res) => {
    const subtasks = await Tabela.listar(req.task.id)
    res.send(
        JSON.stringify(subtasks)
    )
   
})

roteador.post('/' , async (req, res,proximo) => {

    try{
        const idtask = req.task.id
        const corpo = req.body
        const dados = Object.assign({} , corpo , {idEstr: idtask})
        const subtask = new Sub(dados)
        await subtask.criar()
        res.status(201)
        res.send(subtask)
    }catch(erro){
        proximo(erro)
    }
    

})

roteador.delete('/:id' , async (req, res) => {
    const dados = {
        id: req.params.id,
        idEstr: req.task.id
    }

    const subtasks = new Sub(dados)
    await subtasks.apagar()
    res.status(204)
    res.end()

})

module.exports = roteador