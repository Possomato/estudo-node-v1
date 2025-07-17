import { Router } from 'express'

import { CourseAndModuleController } from '../controller/CourseAndModuleController'

const courseAndModuleRouter = Router()
const courseAndModuleController = new CourseAndModuleController()

courseAndModuleRouter.get(':id/modules', courseAndModuleController.show)

export {courseAndModuleRouter}