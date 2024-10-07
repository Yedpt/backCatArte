import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { formatValidationErrors } from './path/to/your/helper/file'; // Asegúrate de importar la función correctamente

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = formatValidationErrors(errors.array());
    return res.status(400).json(formattedErrors);
  }
  next();
};
