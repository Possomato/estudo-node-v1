import { Router } from 'express'
import { ProductController } from '../controller/ProductController'
import { checkCategory } from '../middlewares/checkCategory'

const productRouter = Router()
const productController = new ProductController()

productRouter.post('/', checkCategory, productController.create)
productRouter.get('/', checkCategory, productController.index)

export { productRouter }
