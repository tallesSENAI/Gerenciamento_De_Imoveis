const espresso = require('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

const rotasCargos = require('./cargos/controladorCargo');
meuServidor.use(rotasCargos);

const rotasUsuario = require('./usuarios/controladorUsuario');
meuServidor.use(rotasUsuario);

meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});
