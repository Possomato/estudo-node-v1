import { Request, Response, NextFunction } from 'express'

export function checkCategory(req: Request, res: Response, next: NextFunction) {
  const category = req.body.category

  if (category !== 'office') {
    throw new Error('Apenas itens de escritório são permitidos')
  } else {
    next()
  }
}
