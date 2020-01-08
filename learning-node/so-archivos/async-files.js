const fs = require('fs');

//vector de argumentos = argv
//es la manera de tomar datos en la lectura de un comando que ingresamos por la terminal 
const file = process.argv[2];

if (!file) {
    throw new Error('Debes indicar el archivo');
}

const content = fs.readFile(file, (err, content) => {
    if (err) {
        return console.log(err)
    }

    const lines = content.toString().split('\n').length;
    console.log(lines);
});
