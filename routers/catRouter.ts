import { Router } from 'express';
import { getAllMemes, createMeme } from  '../controllers/catController.js';

const router = Router();

router.get('/memes', getAllMemes);

router.post('/memes', createMeme);

export default router;