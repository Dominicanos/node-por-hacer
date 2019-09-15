const descripcion = {
    demand: true,
    alias: 'd',
    dec: 'Descripcion de las tareas por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea por hace'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra el estado de la tarea por hacer', {
        descripcion
    })
    .help()
    .argv;
module.exports = {

    argv: argv
}