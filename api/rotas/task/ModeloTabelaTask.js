const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'Tasks',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
}

module.exports = instancia.define('task', colunas , opcoes);