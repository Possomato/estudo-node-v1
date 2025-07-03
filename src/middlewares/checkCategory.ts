import { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/AppError'

export function checkCategory(req: Request, res: Response, next: NextFunction) {
  const category = req.body.category

  if (category !== 'office') {
    // throw new Error('Apenas itens de escritório são permitidos')
    throw new AppError('Apenas itens de escritório são permitidos')
  } else {
    next()
  }
}
