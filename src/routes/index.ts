import { Router } from 'express'
import { productRouter } from './product.routes'

const routes = Router()

routes.use('/product', productRouter)

export { routes }
