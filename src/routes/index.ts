import { Router } from 'express'
import { productRouter } from './product.routes'
import { coursesRouter } from './courses.routes'

const routes = Router()

routes.use('/product', productRouter)
routes.use('/courses', coursesRouter)

export { routes }
