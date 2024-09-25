import connectionDb from "./database/conectionDB.js";
import express from "express";
// imrport catRouter from "./routers/catRouter"
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

// Simular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar el archivo .env desde la raíz del proyecto
dotenv.config({ path: resolve(__dirname, './.env') }); 

const app = express();
const PORT = process.env.PORT;

//middlewre para manejar JSON
app.use(express.json());

//rutas de la api
// app.use('/api', catRouter);

//probamos la conexion a la base de datos 
 connectionDb
  .authenticate()
  .then(() => {
    console.log('Conectado a la base de datos 😊')
    //sincronizamos los modelos con la base de datos
    connectionDb.sync({ alter: true});
  })
  .catch((err) => {
    console.log('No se pudo conectar a la base de datos.😒')
  });

  //levantamos el servidor 
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });

// (async () => {
//   try {
//     await connectionDb.authenticate();
//     console.log('Connection has been established successfully.');
//     await Book.sync({ force: true });
//     console.log('The table for the Book model was just re-created.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();
