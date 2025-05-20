import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { blocksServices } from "./blocks.services"



const createBlock = catchAsync(async (req, res) => {
    const blocksData = req.body
    const result = await blocksServices.createBlock(blocksData)

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Blocks created successfully',
        data: result
    })

})
const getBlocks = catchAsync(async (req, res) => {

    const result = await blocksServices.getBlocks()

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks retrieved successfully',
        data: result
    })

})
const getSingleBlock = catchAsync(async (req, res) => {

    const id = req.params.id
    const result = await blocksServices.getSingleBlock(id)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks retrieved successfully',
        data: result
    })

})

const updateBlocks = catchAsync(async (req, res) => {

    const blocksData = req.body
    const id = req.params.id

    const result = await blocksServices.updateBlocks(id, blocksData)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks updated successfully',
        data: result
    })

})


const deleteBlocks = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await blocksServices.deleteBlocks(id)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks deleted successfully',
        data: result
    })

})

export const blocksControllers = {
    createBlock,
    getBlocks,
    updateBlocks,
    deleteBlocks,
    getSingleBlock
}
