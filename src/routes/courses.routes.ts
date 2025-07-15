import { Router } from 'express'
import { CoursesController } from '../controller/CoursesController'

const coursesRouter = Router()
const coursesController = new CoursesController()

coursesRouter.post('/', coursesController.create)
coursesRouter.get('/', coursesController.index)
coursesRouter.put('/:id', coursesController.update)
coursesRouter.get('/:id', coursesController.show)

export {coursesRouter}