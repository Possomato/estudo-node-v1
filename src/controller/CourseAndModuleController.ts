import { Request, Response } from 'express'
import { knex } from '../database/knex'

export class CourseAndModuleController {
  async show(req: Request, res: Response) {
    const { id } = req.params
    const courses = await knex('courses')
      .select(
        'course_modules.id',
        'course_modules.name AS module',
        'courses.name AS course',
      )
      .join('course_modules', 'courses.id', 'course_modules.id_course')
      .where('courses.id', id)
    res.send(courses)
  }
}
