const ModeloTabela = require('../rotas/task/ModeloTabelaTask');

ModeloTabela.sync().then(() => console.log('Tabelas criadas com sucesso')).catch(console.log);