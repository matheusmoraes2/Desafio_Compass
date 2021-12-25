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
    remover(idSubtasks, idTask) {
        return Modelo.destroy({
            where: {
                id: idSubtasks,
                idEstr: idTask
            }
        })
    },
    atualizar(dadosDaSub, dadosParaAtt){
        return Modelo.update(
            dadosParaAtt,
            {
                where: dadosDaSub
            }
        )
    }
}