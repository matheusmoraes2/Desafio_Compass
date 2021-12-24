const roteador = require('express').Router()
const TabelaTask = require('./TabelaTask');
const TaskConst = require('./TaskConst');

roteador.post('/', async (req,res,proximo) => {
    
    try{

        const dadosRecebidos = req.body
        const task = new TaskConst(dadosRecebidos)
        await task.criar()
        res.status(201)
        res.send(
            JSON.stringify(task) 
        )
    }catch(erro){
        proximo(erro)
    }

})

roteador.get('/' ,async (req , res) => {
    const resultados = await TabelaTask.listar() 
    res.status(200)
    res.send(
        JSON.stringify(resultados)
    );
})

roteador.get('/:idTask', async (req, res,proximo) =>{
    try{
        const id = req.params.idTask
        const task = new TaskConst({id: id})
        await task.carregar()
        res.status(200)
        res.send(
            JSON.stringify(task)
        )
    }catch(erro){
        proximo(erro)
    }
})

roteador.put('/:idTask', async (req,res, proximo) => {

    try{
        const id = req.params.idTask;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, dadosRecebidos, {id: id})
    const task = new TaskConst(dados)
    await task.atualizar()
    res.status(200)
    res.end()

    }catch(erro){
        proximo(erro)
    }
})

roteador.delete('/:idTask', async (req, res, proximo) =>{
    try{
        const id = req.params.idTask
        const task = new TaskConst({id:id})
        await task.carregar()
        await task.remover()
        res.status(204)
        res.end()
        }catch(erro){
            proximo(erro)
        }

})

const roteadorSubTasks = require('./subTasks')

const verificarTask = async (req, res, proximo) =>{
    try{
        const id = req.params.idTask
        const task = new TaskConst({id:id})
        await task.carregar()
        req.task = task
        proximo()
    }catch(erro){
        proximo(erro)
    }
}

roteador.use('/:idTask/task' , verificarTask, roteadorSubTasks)

module.exports = roteador;