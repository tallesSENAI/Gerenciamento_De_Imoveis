const Sequelize = require('sequelize');
const conexao = require('../Conexao/conexao');
const Imovel = require('../Imovel/modeloImo');
const Cliente = require('../Cliente/modeloCli');

const Visita = conexao.define('visita', {
    codImovel: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, 
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
        references: {
            model: Cliente,
            key: 'codCliente',
        },
        onDelete: 'CASCADE'
    },
    dataVisita: {
        type: Sequelize.DATE,
        allowNull: false
    },
    visitaRealizada: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
});

Visita.sync({
    alter: true
});

module.exports = Visita;