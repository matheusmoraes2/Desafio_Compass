class NaoEncontrado extends Error {
    constructor() {
        super('Task não foi encontrada')
        this.name = 'NãoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado