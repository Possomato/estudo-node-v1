import { Request, Response } from 'express'

export class ProductController {
  create(req: Request, res: Response) {
    const { name, price, category } = req.body
    res.status(201).json({ name, price })
  }

  index(req: Request, res: Response) {
    const { name, price } = req.body
    res.send(`${name} cadastrado com sucesso por R$${price}.`)
  }
}
