import { Router } from 'express';
import { validateCreateMeme, validateDeleteMeme, validateUpdateMeme } from '../validators/backValidator.js';
import { getAllMemes, createMeme, deleteMeme, putMeme } from '../controllers/catController.js';

const router = Router();

router.get('/meme', getAllMemes);

router.post('/creatememe', validateCreateMeme, createMeme);

router.delete('/deletememe/:id', validateDeleteMeme, deleteMeme);

router.put('/updatememe/:id', validateUpdateMeme, putMeme);

export { router };
