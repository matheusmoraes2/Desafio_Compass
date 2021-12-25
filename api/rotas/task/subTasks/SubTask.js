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

    atualizar(){
        const dadosParaAtt = {}

        if(typeof this.title === 'string' && this.title.length > 0){
            dadosParaAtt.title = this.title
        }
        if(typeof this.taskRelevance === 'number' ){
            dadosParaAtt.taskRelevance = this.taskRelevance
        }
        if(typeof this.completed === 'boolean' ){
            dadosParaAtt.completed = this.completed
        }
        if(Object.keys(dadosParaAtt).length === 0){
            throw new Error('Não foram fornecido dados para atualizar')

        }
        return Tabela.atualizar(
            {
                id: this.id,
                idEstr: this.idEstr
            },
            dadosParaAtt
        )
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