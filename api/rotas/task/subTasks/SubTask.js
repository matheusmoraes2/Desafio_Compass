const Tabela = require('./TabelaSubTasks')

class SubTask{
    constructor({id,title,taskRelevance,completed,idEstr,createdAt,updatedAt}){
        this.id = id
        this.title = title
        this.taskRelevance = taskRelevance
        this.completed = completed
        this.idEstr = idEstr
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    validar(){
        if(typeof this.title !== 'string' || this.title.length === 0){
            throw new Error ('O campo title está inválido')
        }
        if(typeof this.taskRelevance !== 'number'){
            throw new Error('O campo taskRelevance está inválido')
        }
        if(typeof this.completed !== 'boolean'){
            throw new Error('O campo completed está inválido')
        }
    }

    

    async criar(){
        this.validar()
        const resultado = await Tabela.inserir({
            idEstr: this.idEstr,
            title: this.title,
            taskRelevance: this.taskRelevance,
            completed: this.completed,
            
        })
        
        this.id = resultado.id
        this.createdAt = resultado.createdAt
        this.updatedAt = resultado.updatedAd
    }

    apagar(){
        return Tabela.remover(this.id, this.idEstr)
    }
}

module.exports = SubTask