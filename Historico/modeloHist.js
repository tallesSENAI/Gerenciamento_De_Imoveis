const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Imovel = require('../Imovel/modeloImo');
const Cliente = require('../Cliente/modeloCli');
const Corretor = require('../Corretor/modeloCorre');

const Historico = conexao.define('historico', {
    codHistorico: {
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
    codCliente: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'codCliente',
        },
        onDelete: 'CASCADE'
    },
    codCorretor: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Corretor,
            key: 'codCorretor',
        },
        onDelete: 'CASCADE'
    },
    dataNegociacao: {
        type: Sequelize.DATETIME,
        allowNull: false
    },
    percentualComissao: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

Historico.sync({
    alter: true
});

module.exports = Historico;