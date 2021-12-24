const Sequelize = require('sequelize');
const instancia = require('../../../banco-de-dados');

const colunas = {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    taskRelevance:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    completed:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    idEstr:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../ModeloTabelaTask'),
            key: 'id'
        }
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'subTasks',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
}

module.exports = instancia.define('subtasks', colunas , opcoes);
