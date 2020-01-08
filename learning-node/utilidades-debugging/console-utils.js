// %s == string
// %d == number
// %j == json 

console.log('Un %s y un %s', 'Perrito', 'Gatito');

//el console.info en realidad es un alias del console.log
//lo unico distinto en que muestra un icono de info
console.info('Hello world');

//el console.warn en realidad es un alias del console.log
//lo unico distinto en que muestra un icono de warning
console.warn('hello error');

//el console.assert valida condiciones
//esto daria ok
console.assert(42 == '42');
//esto daria assertion failed
console.assert(42 === '42');

//el console.trace nos indica la linea donde esta ocurriendo el mismo
console.trace('hello');

const util = require('util');
const debuglog = util.debuglog('foo');

//esto se ejecutara solo cuando en el comando le pasemos la variable de entorno
debuglog('hello from foo');

