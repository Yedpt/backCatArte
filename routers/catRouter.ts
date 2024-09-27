import { Router } from 'express';
import { getAllMemes } from  '../controllers/catController.js';

const router = Router();

router.get('/memes', getAllMemes);

export default router;