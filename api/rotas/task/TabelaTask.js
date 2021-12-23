const Modelo = require('./ModeloTabelaTask');

module.exports = {
    inserir(task) {
        return Modelo.create(task)
    }
}