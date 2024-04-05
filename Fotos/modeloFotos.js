const Sequelize = require('sequelize');
const conexao = require('../Conexao/conexao');
const Imovel = require('../Imovel/modeloImo');

const Fotos = conexao.define('fotos', {
    codImagem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    codImovel: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Imovel,
            key: 'codImovel',
        },
        onDelete: 'CASCADE'
    },
    chaveAws: {
        type: Sequelize.CHAR,
        allowNull: false
    }
}, {
    timestamps: false
});

Fotos.sync({
    alter: true
});

module.exports = Fotos;