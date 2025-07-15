import { Request, Response } from 'express'
import { knex } from '../database/knex'

export class CoursesController {
  async create(req: Request, res: Response) {
    const { name } = req.body

    await knex('courses').insert({ name })
    res.status(201).json(name)
  }

  async index(req: Request, res: Response) {
    const courses = await knex('courses').select()

    res.send(courses)
  }

  async show(req: Request, res: Response){
    const {id} = req.params
    const coursesFiltered = await knex('courses').where({id})
    res.send(coursesFiltered)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const {name} = req.body

    await knex('courses').update({ name }).where({ id })
    res.json(name)
  }
}
