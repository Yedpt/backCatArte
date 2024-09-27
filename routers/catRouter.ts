import { Router } from 'express';
import { deleteMeme, getAllMemes, createMeme } from  '../controllers/catController.js';

const router = Router();

router.get('/', getAllMemes);

router.post('/', createMeme);

router.delete('/:id', deleteMeme);

export default router;