//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];
console.log(argv);

switch (comando) {
    case 'crear':
        console.log('crear tarea por hacer');
        let tarea = porHacer.crear(argv.descripcion);

        console.log("tarea", tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {

            console.log('================='.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('================='.green);
        }
        break;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('tu comando no es un comando conocido');
        break;
}