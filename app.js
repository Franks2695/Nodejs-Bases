const { crearArchivo, imprimirTabla } = require('./controlador/multiplicar');
const argv = require('./config/yargs').argv;

let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        imprimirTabla(base, limite)
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(mensaje => console.log(`Archivo creado: ${mensaje}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no válido.');
}