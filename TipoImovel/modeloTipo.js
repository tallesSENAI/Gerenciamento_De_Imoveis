const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');

const tipoImovel = conexao.define('tipoImovel', {
    codTipoImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
});

tipoImovel.sync({
    alter: true
});

module.exports = tipoImovel;