const fs = require('fs');

//crear un directorio tal cual como se haria desde una consola
fs.mkdir('platzi/escuela-js/node', { recursive: true }, (err) => {
    if (err) {
        return console.log(err);
    }
});