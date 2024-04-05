const Sequelize = require('sequelize');
const conexao = require('../Conexao/conexao');
const tipoImovel = require('../TipoImovel/modeloTipo');
const Endereco = require('../Endereco/modeloEnde');

const Imovel = conexao.define('imovel', {
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, //PK
        autoIncrement: true
    },
    codTipoImovel: { //FK
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: tipoImovel,
            key: 'codTipoImovel',
        },
        onDelete: 'CASCADE'
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
    descricao: {
        type: Sequelize.STRING(400),
        allowNull: false
    },
    areaMetros: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

Imovel.sync({
    alter: true
});

module.exports = Imovel;