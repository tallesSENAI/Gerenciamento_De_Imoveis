const express = require('express');
const Fotos = require('./modeloFotos');
const router = express.Router();

router.get('/fotos', async (requisicao, resposta) => {
    const fotos = await Fotos.findAll();
    resposta.send(fotos);
});

router.post('/fotos', (requisicao, resposta) => {
    const chaveAws = requisicao.body.chaveAws;
    const codImovel = requisicao.body.imovelId;
    
    Fotos.create({ 
        chaveAws: chaveAws,
        imovelId: codImovel
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/fotos/:fotosId', (requisicao, resposta) => {
    const codImagem = requisicao.params.fotosId;
    const codImovel = requisicao.body.imovelId;
    const chaveAws = requisicao.body.chaveAws;

    Cargo.update({ 
        chaveAws: chaveAws,
        imovelId: codImovel
    },
        { where:
            {
                codigo: codImagem
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/fotos/:fotosId', (requisicao, resposta) => {
    const codImagem = requisicao.params.fotosId;
    Fotos.destroy({ where: { codigo: codImagem } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/fotos/:fotosId', async (requisicao, resposta) => {
    const codImagem = requisicao.params.fotosId;
    resposta.json(await Fotos.findByPk(codImagem));
});

module.exports = router;