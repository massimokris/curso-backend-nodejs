require('dotenv').config();

//tomo la variables de entorno del archivo .env
//aca puedo definir si el entorno es dev, production o testing
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8001,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME
};

module.exports = { config };
