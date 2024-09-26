import Meme from './models/catModel.js';  // Import model from table Meme
import conectionDB from './database/conectionDB.js'; // Import database connection
import { Response, Request } from 'express';
import cors from 'cors';
import express from 'express';
import router from './routers/catRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/meme', router)

// GET method
export const mostrarMemes = async (req: Request, res: Response): Promise<void>  => {
  try {
    await conectionDB.authenticate();  // Autheticas the database
    console.log('Conexión a la base de datos exitosa');

    // Fetch all memes from the database
    const memes = await Meme.findAll();
    
    // Send the memes as a json response
   res.json(memes);
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos 😒:', error);
    res.status(500).json({ error: 'Error cargando memes de la base de datos'})
  }
}

//POST method
export const updateMeme= async (req:Request, res:Response):Promise<void> =>{

  const {body}=req;
  try{
    const meme = new Meme(body);
    await meme.save();
    res.json(meme);
  } catch (error){
    console.log(error);
    res.status(500).json({
      msg: 'Carga fallida'
    })
  }
}


