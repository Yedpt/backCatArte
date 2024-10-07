import conectionDB from './database/conectionDB'; // Import database connection
import catMeme from './models/catModel';  // Import model from table Meme
import express from 'express';
import cors from 'cors';
import { router } from './routers/catRouter';
import {PORT} from './config';



const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // O el dominio donde esté corriendo tu front-end
}));
app.use(express.json());

app.use('/', router);
app.use('/creatememe', router);
app.use('/deletememe', router);
app.use('/updatememe', router);

  try {
   conectionDB.authenticate();  // Autheticas the database
    console.log('Conexión a la base de datos exitosa');

    // Fetch all memes from the database
   catMeme.sync({ force: false });
   console.log('Tabla de memes creada');

  } catch (error) {
    console.error('Error al conectar o consultar la base de datos 😒:', error);
  }


app.listen((PORT || 3000), () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}/`);;
});