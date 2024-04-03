const express = require('express');
const Proprietario = require('./modeloPro');
const router = express.Router();

router.get('/proprietario', async (requisicao, resposta) => {
    const proprietario = await Proprietario.findAll();
    resposta.send(proprietario);
});

router.post('/proprietario', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;
    const codEndereco = requisicao.body.enderecoId;

    Proprietario.create({ 
        nome: nome,
        CPF: CPF,
        CNPJ: CNPJ,
        dataNascimento: dataNascimento,
        enderecoId: codEndereco
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/proprietario/:proprietarioId', (requisicao, resposta) => {
    const codProprietario = requisicao.params.proprietarioId;
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;
    const codEndereco = requisicao.body.enderecoId;

    Proprietario.update({ 
        nome: nome,
        CPF: CPF,
        CNPJ: CNPJ,
        dataNascimento: dataNascimento,
        enderecoId: codEndereco
    },
        { where:
            {
                codigo: codProprietario
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/proprietario/:proprietarioId', (requisicao, resposta) => {
    const codProprietario = requisicao.params.proprietarioId;
    Proprietario.destroy({ where: { codigo: codProprietario } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/proprietario/:proprietarioId', async (requisicao, resposta) => {
    const codProprietario = requisicao.params.proprietarioId;
    resposta.json(await Proprietario.findByPk(codProprietario));
});

module.exports = router;