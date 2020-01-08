const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//middelware body parser
app.use(express.json());
app.use(cors());

//crear un ruta en express
//con app le indicamos que metodo va a utilizar (get, post, put, etc)
//como primer parametro la ruta
//como segundo parametro un callback que va a tener un request y un response
// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.get('/json', (req, res) => {
//     res.json({hello: 'world'});
// });

//challenge para crear endpoint que resiva una año
//y retorna si es bisiesto o no
// app.get('/challenge/:year', (req, res) => {
//     let bisiesto = true;
//     const year = req.params.year;
//     if (year %4 === 0) {
//         if (year %100 === 0) {
//             bisiesto = false;
//         }
//     } else {
//         bisiesto = false;
//     }
//     res.send(`Bisiesto: ${bisiesto}`);
// });

//routes
moviesApi(app);

//Catch 404
app.use(notFoundHandler);

//Errors middelware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
