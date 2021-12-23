const Modelo = require('./ModeloTabelaTask');

module.exports = {
    inserir(task) {
        return Modelo.create(task)
    },
    listar(){
        return Modelo.findAll();
    },
    async pegarPorId(id){
        const encontrado = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if(!encontrado){
            throw new Error('Task não encontrada')
        }

        return  encontrado;
    },
    atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where : {id:id}
            }
        )
    },
    remover(id){
        return Modelo.destroy({
            where:{id:id}
        })
    }
}