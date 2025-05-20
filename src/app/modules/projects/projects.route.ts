import express from 'express'
import { projectControllers } from './projects.controller'

const router = express.Router()

// projects user routes
router.get('/', projectControllers.getProjects)
router.post('/', projectControllers.createUserController)
router.patch('/:id', projectControllers.updateProject)
router.delete('/:id', projectControllers.deleteProject)

export const projectRoute = router
