import { Request, Response } from 'express';
import catMeme from '../models/catModel.js'

export const getAllMemes = async (req: Request, res: Response) => {
  try {
    const meme = await catMeme.findAll();
    res.json(meme);
  } catch (error) {
    res.json({ message: "A ocurrido un error", error });
  }
};

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

//funcion para eliminar el meme

export const deleteMeme = async (req: Request, res: Response) => {
  try {
    const memeId = req.params.id;
    const meme = await catMeme.findByPk(memeId)
    await meme?.destroy();
    res.json(meme);
  } catch (error) {
    console.log('El meme no se pudo eliminar', error);
  }
};