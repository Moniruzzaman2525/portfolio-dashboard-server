import express from 'express'
import { blocksControllers } from './blocks.controller'

const router = express.Router()


router.get('/', blocksControllers.getBlocks)
router.post('/', blocksControllers.createBlock)
router.patch('/:id', blocksControllers.updateBlocks)
router.delete('/:id', blocksControllers.deleteBlocks)
router.get('/:id', blocksControllers.getSingleBlock)

export const blocksRoute = router
