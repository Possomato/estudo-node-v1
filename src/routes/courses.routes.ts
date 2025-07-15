import { Router } from 'express'
import { CoursesController } from '../controller/CoursesController'

const coursesRouter = Router()
const coursesController = new CoursesController()

coursesRouter.post('/', coursesController.create)

export {coursesRouter}