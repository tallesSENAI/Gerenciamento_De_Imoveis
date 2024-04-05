const express = require('express');
const Corretor = require('./modeloCorre');
const router = express.Router();

router.get('/corretor', async (requisicao, resposta) => {
    const corretores = await Corretor.findAll();
    resposta.send(corretores);
});

router.post('/corretor', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoEndereco = requisicao.body.enderecoId;
    
    Corretor.create({ 

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

router.put('/corretor/:corretorId', (requisicao, resposta) => {
    const codigoCorretor = requisicao.params.corretorId;
    const codigoEndereco = requisicao.body.enderecoId;
    const nome = requisicao.body.nome;
    const CPF = requisicao.body.CPF;
    const CNPJ = requisicao.body.CNPJ;
    const dataNascimento = requisicao.body.dataNascimento;

    Corretor.update({ 
        enderecoId: codigoEndereco,
        nome: nome,
        CPF: CPF,
        CNPJ: CNPJ,
        dataNascimento: dataNascimento 
    },
        { where:
            {
                codigo: codigoCorretor
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/corretor/:corretorId', (requisicao, resposta) => {
    const codigoCorretor = requisicao.params.corretorId;
    Corretor.destroy({ where: { codigo: codigoCorretor } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/corretor/:corretorId', async (requisicao, resposta) => {
    const corretorId = requisicao.params.corretorId;
    resposta.json(await Corretor.findByPk(corretorId));
});

module.exports = router;