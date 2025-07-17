import { Router } from 'express'
import { CoursesController } from '../controller/CoursesController'
import { CourseAndModuleController } from '../controller/CourseAndModuleController'

const coursesRouter = Router()
const coursesController = new CoursesController()
const courseAndModuleController = new CourseAndModuleController()

coursesRouter.post('/', coursesController.create)
coursesRouter.get('/', coursesController.index)
coursesRouter.put('/:id', coursesController.update)
coursesRouter.get('/:id', coursesController.show)
coursesRouter.delete('/:id', coursesController.delete)

coursesRouter.get('/:id/modules', courseAndModuleController.show)

export { coursesRouter }
