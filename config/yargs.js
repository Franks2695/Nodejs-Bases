let opciones = {
    base: {
        demand: true,
        alias: 'b',
        desc: 'La base de la tabla de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        desc: 'Limite de la tabla de multiplicar'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opciones)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}