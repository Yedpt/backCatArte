import { Request, Response } from 'express';
import catMeme from '../models/catModel.js'

export const getAllMemes = async (req: Request, res: Response) => {
  try {
    const meme = await catMeme.findAll();
    res.json(meme);
  } catch (error) {
    res.json({ message: "A ocurrido un error", error });
  }
};import catModel from '../models/catModel.js'

export const getAllMemes = async (req: Request, res: Response) => {
  try {
    const meme = await catModel.findAll();
    res.json(meme);
  } catch (error) {
    res.json({ message: "A ocurrido un error", error });
  }
};



