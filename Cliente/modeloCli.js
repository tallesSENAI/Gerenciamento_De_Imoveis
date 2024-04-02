const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');

const Cliente = conexao.define('cliente', {
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    ClienteEndereco: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Endereco,
            key: 'codEndereco',
        },
        onDelete: 'CASCADE'
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
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

Cliente.sync({
    alter: true
});

module.exports = Cliente;