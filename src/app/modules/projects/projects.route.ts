import express from 'express'
import { projectControllers } from './projects.controller'

const router = express.Router()

// projects user routes
router.post('/', projectControllers.createUserController)

export const projectRoute = router
