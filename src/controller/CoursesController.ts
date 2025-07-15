import { Request, Response } from 'express'
import { knex } from '../database/knex'

export class CoursesController {
  async create(req: Request, res: Response) {
    const { name } = req.body

    await knex('courses').insert({ name })
    res.status(201).json(name)
  }

}
