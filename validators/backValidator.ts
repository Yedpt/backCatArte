import { body, param } from 'express-validator';
import catMeme from '../models/catModel.js';

export const validateCreateMeme = [
  body('name').isString().isLength({ min: 3, max: 50 }).withMessage('El nombre debe tener entre 3 y 50 caracteres'),
  body('description').isString().isLength({ max: 500 }).withMessage('La descripción no debe exceder los 500 caracteres'),
  body('category').matches(/^[a-zA-Z\s]+$/).withMessage('La categoría solo debe contener letras y espacios'),
  body('image').isURL().withMessage('La imagen debe ser una URL válida'),
  body('date').isISO8601().withMessage('La fecha debe ser una fecha válida en formato ISO8601'),
  body('likes').isInt({ min: 0 }).withMessage('Los likes deben ser un número entero positivo'),
  body('name').custom(async (value) => {
    const meme = await catMeme.findOne({ where: { name: value } });
    if (meme) {
      throw new Error('El nombre ya está en uso');
    }
    return true;
  }),
];

export const validateDeleteMeme = [
  param('id').isInt().withMessage('El ID debe ser un número entero')
];

export const validateUpdateMeme = [
  param('id').isInt().withMessage('El ID debe ser un número entero'),
  body('name').optional().isString().isLength({ min: 3, max: 50 }).withMessage('El nombre debe tener entre 3 y 50 caracteres'),
  body('description').optional().isString().isLength({ max: 500 }).withMessage('La descripción no debe exceder los 500 caracteres'),
  body('category').optional().matches(/^[a-zA-Z\s]+$/).withMessage('La categoría solo debe contener letras y espacios'),
  body('image').optional().isURL().withMessage('La imagen debe ser una URL válida'),
  body('date').optional().isISO8601().withMessage('La fecha debe ser una fecha válida en formato ISO8601'),
  body('likes').optional().isInt({ min: 0 }).withMessage('Los likes deben ser un número entero positivo'),
  body('name').optional().custom(async (value) => {
    const meme = await catMeme.findOne({ where: { name: value } });
    if (meme) {
      throw new Error('El nombre ya está en uso');
    }
    return true;
  }),
];
