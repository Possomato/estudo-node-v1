import { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/AppError'
import { z } from 'zod'

export function checkCategory(req: Request, res: Response, next: NextFunction) {
  const category = req.body.category

  const bodySchema = z.object({
    name: z
      .string()
      .trim()
      .min(6, { message: 'O nome deve ter 6 ou mais letras' }),
    price: z.number().positive(),
    category: z
      .string()
      .refine((category) => category === 'office', {
        message: 'Apenas itens de escritório são permitidos',
      }),
  })
  bodySchema.parse(req.body)

  if (category !== 'office') {
    // throw new Error('Apenas itens de escritório são permitidos')

    // throw new AppError('Apenas itens de escritório são permitidos')
  } else {
    next()
  }
}
