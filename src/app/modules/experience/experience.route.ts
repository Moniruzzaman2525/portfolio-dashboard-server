import express from 'express'
import { experienceControllers } from './experience.controller'

const router = express.Router()


router.get('/', experienceControllers.getExperience)
router.post('/', experienceControllers.createExperience)
router.patch('/:id', experienceControllers.updateExperience)
router.delete('/:id', experienceControllers.deleteExperience)
router.get('/:id', experienceControllers.getSingleExperience)

export const experienceRoute = router
