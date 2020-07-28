// require
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

// console.log(comando);
switch (comando) {
    case 'listar':
        console.log(`Listar tabla del ${ argv.base } con un limite de ${ argv.limite }`);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ colors.green(archivo) }`) )
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
// console.log('Limite',argv.limite);

