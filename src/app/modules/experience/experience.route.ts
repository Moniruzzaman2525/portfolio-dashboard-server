import express from 'express'
import { skillController } from './experience.controller'

const router = express.Router()


router.get('/', skillController.getSkills)
router.post('/', skillController.createSkills)
router.patch('/:id', skillController.updateSkills)
router.delete('/:id', skillController.deleteSkills)
router.get('/:id', skillController.getSingleSkills)

export const skillsRoute = router
