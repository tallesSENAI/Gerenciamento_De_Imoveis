const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Imovel = require('../Imovel/modeloImo');
const Cliente = require('../Cliente/modeloCli');

const Visita = conexao.define('visita', {
    codImovel: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
        references: {
            model: Imovel,
            key: 'codImovel',
        },
        onDelete: 'CASCADE'
    },
    codCliente: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
        references: {
            model: Cliente,
            key: 'codCliente',
        },
        onDelete: 'CASCADE'
    },
    dataVisita: {
        type: Sequelize.DATETIME,
        allowNull: false
    },
    visitaRealizada: {
        type: Sequelize.BIT,
        allowNull: false
    }
}, {
    timestamps: false
});

Visita.sync({
    alter: true
});

module.exports = Visita;