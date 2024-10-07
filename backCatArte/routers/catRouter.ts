import { Router } from 'express';
import { deleteMeme, getAllMemes, createMeme, putMeme } from '../controllers/catController.js';
import { validateCreateMeme, validateUpdateMeme, validateDeleteMeme } from '../validations/catValidation.js';
import { validationHandler } from '../handle/handleValidator.js';

export const router = Router();

// Las rutas relativas, no especificas 'api/memes' aquí prueba
router.get('/', getAllMemes);
router.post('/', validateCreateMeme, validationHandler, createMeme);
router.delete('/:id', validateDeleteMeme, validationHandler, deleteMeme);
router.put('/:id', validateUpdateMeme, validationHandler, putMeme);