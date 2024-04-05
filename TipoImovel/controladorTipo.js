const express = require('express');
const TipoImovel = require('./modeloTipo');
const router = express.Router();

router.get('/tipoImovel', async (requisicao, resposta) => {
    const tipos = await TipoImovel.findAll();
    resposta.send(tipos);
});

router.post('/tipoImovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    
    TipoImovel.create({ 
        descricao: descricao,
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/tipoImovel/:tipoImovelId', (requisicao, resposta) => {
    const codigoTipo = requisicao.params.tipoImovelId;
    const descricao = requisicao.body.descricao;
    TipoImovel.update({ descricao: descricao },
        { where:
            {
                codigo: codigoTipo
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/tipoImovel/:tipoImovelId', (requisicao, resposta) => {
    const codigoTipo = requisicao.params.tipoImovelId;
    TipoImovel.destroy({ where: { codigo: codigoTipo } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/tipoImovel/:tipoImovelId', async (requisicao, resposta) => {
    const tipoImovelID = requisicao.params.tipoImovelId;
    resposta.json(await TipoImovel.findByPk(tipoImovelID));
});

module.exports = router;