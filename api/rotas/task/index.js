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

module.exports = roteador;