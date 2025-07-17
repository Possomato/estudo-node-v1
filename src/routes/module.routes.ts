import { Router } from 'express'
import { ModuleController } from '../controller/ModuleController'

const moduleController = new ModuleController()

const moduleRouter = Router()

moduleRouter.post('/', moduleController.create)
moduleRouter.get('/', moduleController.index)
moduleRouter.get('/:id', moduleController.show)
moduleRouter.put('/:id', moduleController.update)
moduleRouter.delete('/:id', moduleController.delete)

export {moduleRouter}