const express = require('express');
const Endereco = require('./modeloEnde');
const router = express.Router();

router.get('/endereco', async (requisicao, resposta) => {
    const enderecos = await Endereco.findAll(  );
    resposta.send(enderecos);
});

router.post('/endereco', (requisicao, resposta) => {
    const estado = requisicao.body.estado;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const CEP = requisicao.body.CEP;

    Endereco.create({
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        complemento: complemento,
        CEP: CEP
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/endereco/:enderecoId', (requisicao, resposta) => {
    const codEndereco = requisicao.params.enderecoId;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const CEP = requisicao.body.CEP;

    Endereco.update({
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        complemento: complemento,
        CEP: CEP
    }, {
        where: {
            codigo: codEndereco
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/endereco/:enderecoId', (requisicao, resposta) => {
    const codEndereco = requisicao.params.enderecoId;
    Endereco.destroy({ where: { codigo: codEndereco } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/endereco/:enderecoId', async (requisicao, resposta) => {
    const codEndereco = requisicao.params.enderecoId;
    resposta.json(await Endereco.findByPk(codEndereco));
});

module.exports = router;