const fs = require('fs');

//creamos dos archivos para escritura de errores y logs/info
const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

//creamos una consola personalizada y le indicamos los archivos donde va a escribir
//el out va a escribir todo lo que sea console.log y console.info
//el err va a escribit todo lo que sea console.err
const consoleFile = new console.Console(out, err);

setInterval( () => {
    consoleFile.log(new Date());
    consoleFile.error(new Error('Ooops!'));
}, 2000);