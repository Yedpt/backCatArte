import { Request, Response } from 'express';
import catMeme from '../models/catModel.js'

//CRUD
//READ - GET

export const getAllMemes = async (req: Request, res: Response) => {
  try {
    const meme = await catMeme.findAll();
    res.json(meme);
  } catch (error) {
    res.json({ message: "A ocurrido un error", error });
  }
};


//CREATE - POST
export const createMeme = async (req: Request, res: Response) => {
  try {
    const { name, description, category, image, date, likes } = req.body;
    const meme = await catMeme.create({
      name,
      description,
      category,
      image,
      date,
      likes,
    });
    res.json(meme);
  } catch (error) {
    res.json({ message: "A ocurrido un error", error });
  }
};


//DELETE - DELETE

