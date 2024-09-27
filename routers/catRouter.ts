import { Router } from 'express';
import { getAllMemes, createMeme } from  '../controllers/catController.js';

const router = Router();

router.get('/', getAllMemes);

router.post('/', createMeme);

export default router;