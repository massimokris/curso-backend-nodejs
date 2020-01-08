const fs = require('fs');

//leer todos los elementos de un directorio
//y en este caso mostrarlos por consola
const files = fs.readdir(__dirname, (err, files) => {
    if (err) {
        return console.log(err);
    }

    console.log(files);
});