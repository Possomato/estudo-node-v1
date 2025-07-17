import { Request, Response } from 'express'
import { knex } from '../database/knex'

export class ModuleController {
  async create(req: Request, res: Response) {
    const { name, id_course } = req.body

    await knex('course_modules').insert({ name, id_course })

    res.status(201).send({ name, id_course })
  }

  async index(req: Request, res: Response) {
    const modules = await knex('course_modules').select()

    res.send(modules)
  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    const moduleFiltered = await knex('course_modules').where({ id })
    res.send(moduleFiltered)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name } = req.body

    await knex('course_modules').update({ name }).where({ id })

    res.send({ name })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    
    await knex('course_modules').delete().where({ id })

    const modules = await knex('course_modules').select()

    res.send(modules)
  }
}
