const express = require('express');
const Visita = require('./modeloVisi');
const router = express.Router();

router.get('/visita', async (requisicao, resposta) => {
    const tipos = await Visita.findAll();
    resposta.send(tipos);
});

router.post('/visita', (requisicao, resposta) => {
    const dataVisita = requisicao.body.dataVisita;
    const visitaRealizada = requisicao.body.visitaRealizada;
    const codCliente = requisicao.body.clienteId;
    
    Visita.create({ 

        dataVisita: dataVisita,
        visitaRealizada: visitaRealizada,
        clienteId: codCliente

    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.put('/visita/:visitaId', (requisicao, resposta) => {
    const codigoVisita = requisicao.params.visitaId;
    const codigoCliente = requisicao.body.clienteId;
    const dataVisita = requisicao.body.dataVisita;
    const visitaRealizada = requisicao.body.visitaRealizada;

    Visita.update({ 
        clienteId: codigoCliente,
        dataVisita: dataVisita,
        visitaRealizada: visitaRealizada 
    },
        { where:
            {
                codigo: codigoVisita
            }
        }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/visita/:visitaId', (requisicao, resposta) => {
    const codigoVisita = requisicao.params.visitaId;
    Visita.destroy({ where: { codigo: codigoVisita } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/visita/:visitaId', async (requisicao, resposta) => {
    const visitaId = requisicao.params.visitaId;
    resposta.json(await Visita.findByPk(visitaId));
});

module.exports = router;