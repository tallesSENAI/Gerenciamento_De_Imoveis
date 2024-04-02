const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../Endereco/modeloEnde')

const Corretor = conexao.define('corretor', {
    codCorretor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    codEndereco: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
            model: Endereco,
            key: 'codEndereco',
        },
        onDelete: 'CASCADE'
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    CPF: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true
    },
    CNPJ: {
        type: Sequelize.CHAR(14),
        allowNull: true
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

Corretor.sync({
    alter: true
});

module.exports = Corretor;