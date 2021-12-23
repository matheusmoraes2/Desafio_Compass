
class SubTask{
    constructor({id,title,taskRelevance,completed,Idtask,createdAt,updatedAt}){
        this.id = id
        this.title = title
        this.taskRelevance = taskRelevance
        this.completed = completed
        this.Idtask = Idtask
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    criar(){
        const resultado = await TabelaSubTasks.inserir({
            title: this.title,
            taskRelevance: this.taskRelevance,
            completed: this.completed
        })
        
        this.id = resultado.id
        this.Idtask = resultado.Idtask
        this.createdAt = resultado.createdAt
        this.updatedAt = resultado.updatedAd
    }
}
