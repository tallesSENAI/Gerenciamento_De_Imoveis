const express = require('express');
const Historico = require('./modeloHist');
const router = express.Router();

router.get('/historico', async (requisicao, resposta) => {
    const historicos = await Historico.findAll();
    resposta.send(historicos);
});

router.post('/historico', (requisicao, resposta) => {
    const dataNegociacao = requisicao.body.dataNegociacao;
    const percentualComissao = requisicao.body.percentualComissao;
    const codigoImovel = requisicao.body.imovelId;
    const codigoCliente = requisicao.body.clienteId;
    const codigoCorretor = requisicao.body.corretorId;

    Historico.create({ 

        dataNegociacao: dataNegociacao,
        percentualComissao: percentualComissao,
        imovelId: codigoImovel,
        clienteId: codigoCliente,
        corretorId: codigoCorretor

    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/historico/:historicoId', (requisicao, resposta) => {
    const dataNegociacao = requisicao.params.dataNegociacao;
    const percentualComissao = requisicao.body.percentualComissao;
    const codigoHistorico = requisicao.body.historicoId;
    const codigoImovel = requisicao.body.imovelId;
    const codigoCliente = requisicao.body.clienteId;
    const codigoCorretor = requisicao.body.corretorId;

    Historico.update({ 
        dataNegociacao: dataNegociacao,
        percentualComissao: percentualComissao,
        imovelId: codigoImovel,
        clienteId: codigoCliente,
        corretorId: codigoCorretor 
    },
        { where:
            {
                codigo: codigoHistorico
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/historico/:historicoId', (requisicao, resposta) => {
    const codigoHistorico = requisicao.params.historicoId;
    Historico.destroy({ where: { codigo: codigoHistorico } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/historico/:historicoId', async (requisicao, resposta) => {
    const historicoId = requisicao.params.historicoId;
    resposta.json(await Historico.findByPk(historicoId));
});

module.exports = router;