const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == "/echo") {
        let body = [];
        req
            .on('data', chunk => {
                body.push(chunk);
        })
            .on('end', () => {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                body = Buffer.concat(body).toString();
                res.end(getDayName(body));
        });
        
    } else {
       res.statusCode = 404;
       res.end(); 
    }
    
});

const getDayName = (dt) => {
    const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    let date = new Date(dt);
    return date === 'Invalid Date' ? days[date.getDay()] : date.toString();
}

server.listen(8000);
console.log('Servidor en la url http://localhost:8000');