import conectionDB from './database/conectionDB.js'; // Import database connection
import catMeme from './models/catModel.js';  // Import model from table Meme
import express from 'express';
import cors from 'cors';
import router from './routers/catRouter.js';
import {PORT} from './config.js';



const app = express();

app.use(cors());
app.use(express.json());

app.use('/meme', router)

// GET method

  try {
    await conectionDB.authenticate();  // Autheticas the database
    console.log('Conexión a la base de datos exitosa');

    // Fetch all memes from the database
   await catMeme.sync({ force: false });
   console.log('tabla de memes creada');

  } catch (error) {
    console.error('Error al conectar o consultar la base de datos 😒:', error);
  }


app.listen((PORT || 3000), () => {
  console.log(`serviddor corriendo en el puerto ${PORT}`);;
});