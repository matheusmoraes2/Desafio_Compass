const Modelo = require('./ModeloTabelasubTasks')

module.exports = {
    inserir(dados) {
        return Modelo.create(dados)
    },
    listar(IdConstTask){
        return Modelo.findAll({
            where: { 
                idEstr: IdConstTask
            }
        })
    },
    remover(idTask, idSubtasks) {
        return Modelo.destroy({
            where: {
                id: idSubtasks,
                idEstr: idTask
            }
        })
    }
}