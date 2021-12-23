const roteador = require('express').Router();
const TabelaTask = require('./TabelaTask');
const TaskConst = require('./TaskConst');

roteador.post('/', async (req,res) => {
    
    try{

        const dadosRecebidos = req.body
        const task = new TaskConst(dadosRecebidos)
        await task.criar()
        res.status(201)
        res.send(
            JSON.stringify(task) 
        )
    }catch(erro){
        res.status(400)
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }

})

roteador.get('/' ,async (req , res) => {
    const resultados = await TabelaTask.listar()
    res.status(200)
    res.send(
        JSON.stringify(resultados)
    );
})

roteador.get('/:idTask', async (req, res) =>{
    try{
        const id = req.params.idTask
        const task = new TaskConst({id: id})
        await task.carregar()
        res.status(200)
        res.send(
            JSON.stringify(task)
        )
    }catch(erro){
        res.status(404)
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put('/:idTask', async (req,res) => {

    try{
        const id = req.params.idTask;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, dadosRecebidos, {id: id})
    const task = new TaskConst(dados)
    await task.atualizar()
    res.status(204)
    res.end()

    }catch(erro){
        res.status(400)
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.delete('/:idTask', async (req, res) =>{
    try{
        const id = req.params.idTask
        const task = new TaskConst({id:id})
        await task.carregar()
        await task.remover()
        res.status(204)
        res.end()
        }catch(erro){
            res.status(404)
            res.send(
                JSON.stringify({
                    mensagem: erro.message
                })
            )
        }

})
module.exports = roteador;