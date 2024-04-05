const espresso = require('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

const rotasEndereco = require('./Endereco/controladorEnde');
meuServidor.use(rotasEndereco);

const rotasCliente = require('./Cliente/controladorCli');
meuServidor.use(rotasCliente);

const rotasCorretor = require('./Corretor/controladorCorre');
meuServidor.use(rotasCorretor);

const rotasHistorico = require('./Historico/controladorHist');
meuServidor.use(rotasHistorico);

const rotasImovel = require('./Imovel/controladorImo');
meuServidor.use(rotasImovel);

const rotasFotos = require('./Fotos/controladorFotos');
meuServidor.use(rotasFotos);

const rotasProprietario = require('./Proprietario/controladorPro');
meuServidor.use(rotasProprietario);

const rotasTipoImovel = require('./TipoImovel/controladorTipo');
meuServidor.use(rotasTipoImovel);

const rotasVisita = require('./Visita/controladorVisi');
meuServidor.use(rotasVisita);


meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});
