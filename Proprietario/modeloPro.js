const Sequelize = require('sequelize');
const conexao = require('../Conexao/conexao');
const Endereco = require('../Endereco/modeloEnde');

const Proprietario = conexao.define('proprietario', {
    codProprietario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    codEndereco: { //FK
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

Proprietario.sync({
    alter: true
});

module.exports = Proprietario;