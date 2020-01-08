const fs = require('fs');

//copiar un archivo en otro archivo
//en caso de que el archivo exista lo sobre escribe
fs.copyFile('naranja.tx' , 'limon.txt', (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('El archivo naranja fue copiado como limon');
});