const fs = require('fs');

try {
    //vector de argumentos = argv
    //es la manera de tomar datos en la lectura de un comando que ingresamos por la terminal 
    const file = process.argv[2];

    const content = fs.readFileSync(file).toString();

    const lines = content.split('\n').length;
    console.log(lines);
} catch (err) {
    return console.log(err);
}