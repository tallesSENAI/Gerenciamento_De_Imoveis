const Sequelize = require('sequelize');

const conexao = new Sequelize('atividade_talles', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '3306'
});

conexao.authenticate().then(() => {
    console.log('Conectado com sucesso.');
}).catch((erro) => {
    console.log('Deu erro: ', erro);
});

module.exports = conexao;