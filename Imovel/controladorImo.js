const express = require('express');
const Imovel = require('./modeloImo');
const router = express.Router();

router.get('/imovel', async (requisicao, resposta) => {
    const imoveis = await Imovel.findAll();
    resposta.send(imoveis);
});

router.post('/imovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    const areaMetros = requisicao.body.areaMetros;
    const codigoTipoImovel = requisicao.body.tipoId;
    const codigoEndereco = requisicao.body.enderecoId;
    
    Imovel.create({ 

        descricao: descricao,
        areaMetros: areaMetros,
        tipoId: codigoTipoImovel,
        enderecoId: codigoEndereco,

    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/imovel/:imovelId', (requisicao, resposta) => {
    const codigoImovel = requisicao.params.imovelId;
    const descricao = requisicao.body.descricao;
    const areaMetros = requisicao.body.areaMetros;
    const codigoEndereco = requisicao.body.enderecoId;
    const codigoTipoImovel = requisicao.body.tipoId;

    Imovel.update({ 
        enderecoId: codigoEndereco,
        tipoId: codigoTipoImovel,
        descricao: descricao,
        areaMetros: areaMetros,
    },
        { where:
            {
                codigo: codigoImovel
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/imovel/:imovelId', (requisicao, resposta) => {
    const codigoImovel = requisicao.params.imovelId;
    Imovel.destroy({ where: { codigo: codigoImovel } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/imovel/:imovelId', async (requisicao, resposta) => {
    const imovelId = requisicao.params.imovelId;
    resposta.json(await Imovel.findByPk(imovelId));
});

module.exports = router;