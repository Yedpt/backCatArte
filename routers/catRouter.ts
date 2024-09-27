import { Router } from 'express';
import { deleteMeme, getAllMemes } from  '../controllers/catController.js';

const router = Router();

router.get('/memes', getAllMemes);

router.delete('/:id', deleteMeme);

export default router;