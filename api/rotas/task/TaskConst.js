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
        const resultado = await TabelaTask.inserir({
            title: this.title,
            description: this.description
        })
        
        this.id = resultado.id
        this.createdAt = resultado.createdAt
        this.updatedAt = resultado.updatedAd

    }

}

module.exports = TaskConst;

