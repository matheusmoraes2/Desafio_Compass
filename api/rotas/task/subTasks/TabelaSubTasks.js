const Modelo = require('./ModeloTabelasubTasks')

module.exports = {
    inserir(subtask) {
        return Modelo.create(subtask)
    },
    listar(IdConstTask){
        return Modelo.findAll({
            where: { 
                Idtask: IdConstTask
            }
        })
    }
}