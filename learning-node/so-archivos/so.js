const os = require('os');

//Info de tu CPU
console.log('CPU info', os.cpus());

//IP's de una red especifica de tus interfaces
console.log('IP address', os.networkInterfaces()['Wi-Fi'].map(i => i.address));

//Memoria libre del equipo
console.log('Free memory', os.freemem());

//Tipo de sistema operativo
console.log('Type', os.type());

//Version del sistema operativo
console.log('SO version', os.release());

//Informacion del usuario del equipo
console.log('User info', os.userInfo());