import { Router } from 'express';
import { deleteMeme, getAllMemes, createMeme, putMeme } from  '../controllers/catController';

export const router = Router();

// Las rutas relativas, no especificas 'api/memes' aquí prueba
router.get('/', getAllMemes);
router.post('/', createMeme);
router.delete('/:id', deleteMeme);
router.put('/:id', putMeme);