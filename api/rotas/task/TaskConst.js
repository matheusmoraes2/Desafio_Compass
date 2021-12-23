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

