const TabelaTask = require('./TabelaTask');

class TaskConst{
    constructor({id, title, description, createdAt, updatedAt}){
        this.id = id
        this.title = title
        this.description = description
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    async criar(){
        this.validar()
        const resultado = await TabelaTask.inserir({
            title: this.title,
            description: this.description
        })
        
        this.id = resultado.id
        this.createdAt = resultado.createdAt
        this.updatedAt = resultado.updatedAd

    }

    async carregar(){
        const encontrado = await TabelaTask.pegarPorId(this.id)
        this.title = encontrado.title
        this.description = encontrado.description
        this.createdAt = encontrado.createdAt
        this.updatedAt = encontrado.updatedAd

    }

    async atualizar(){
        await TabelaTask.pegarPorId(this.id)
        const campos = ['title', 'description']
        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if(typeof valor === 'string' && valor.length > 0){
                dadosParaAtualizar[campo] = valor
            }
        })

        if (Object.keys(dadosParaAtualizar).length === 0){
            throw new Error ('Não foram fornecidos dados para atualizar!')

        } 

        await TabelaTask.atualizar(this.id, dadosParaAtualizar)
    }

    async remover(){
        TabelaTask.remover(this.id)
    }

    validar(){
        const campos  = ['title', 'description']

        campos.forEach(campo => {
            const valor = this[campo]

            if(typeof valor !== 'string'|| valor.length === 0){
                throw new Error (`O campo '${campo}' está inválido`)
            }
        })
    }

}

module.exports = TaskConst;

