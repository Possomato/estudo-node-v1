import { Router } from 'express'
import { productRouter } from './product.routes'
import { coursesRouter } from './courses.routes'
import { moduleRouter } from './module.routes'

const routes = Router()

routes.use('/product', productRouter)
routes.use('/courses', coursesRouter)
routes.use('/module', moduleRouter)

export { routes }
