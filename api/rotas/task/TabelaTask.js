const Modelo = require('./ModeloTabelaTask');
const NaoEncontrado = require('../../erros/NaoEncontrado')

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
            throw new NaoEncontrado()
        }

        return  encontrado;
    },
    atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where : {id:id}
            })
        
    },
    remover(id){
        return Modelo.destroy({
            where:{id:id}
        })
    }
}