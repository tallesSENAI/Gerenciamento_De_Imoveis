const express = require('express');
const Cliente = require('./modeloCli');
const router = express.Router();

router.get('/cliente', async (requisicao, resposta) => {
    const clientes = await Cliente.findAll();
    resposta.send(clientes);
});

router.post('/clientes', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoEndereco = requisicao.body.enderecoId;
    
    Cliente.create({ 

        nome: nome,
        CPF: CPF,
        CNPJ: CNPJ,
        dataNascimento: dataNascimento,
        enderecoId: codigoEndereco

    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/cliente/:clienteId', (requisicao, resposta) => {
    const codigoCliente = requisicao.params.clienteId;
    const codigoEndereco = requisicao.body.enderecoId;
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;

    Cliente.update({ 
        enderecoId: codigoEndereco,
        nome: nome,
        CPF: CPF,
        CNPJ: CNPJ,
        dataNascimento: dataNascimento 
    },
        { where:
            {
                codigo: codigoCliente
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/cliente/:clienteId', (requisicao, resposta) => {
    const codigoCliente = requisicao.params.clienteId;
    Cliente.destroy({ where: { codigo: codigoCliente } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/cliente/:clienteId', async (requisicao, resposta) => {
    const clienteId = requisicao.params.clienteId;
    resposta.json(await Cliente.findByPk(clienteId));
});

module.exports = router;

