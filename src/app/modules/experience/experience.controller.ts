import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { experienceServices } from "./experience.services"



const createExperience = catchAsync(async (req, res) => {
    const blocksData = req.body
    const result = await experienceServices.createExperience(blocksData)

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Skills created successfully',
        data: result
    })

})
const getExperience = catchAsync(async (req, res) => {

    const result = await experienceServices.getExperience()

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks retrieved successfully',
        data: result
    })

})
const getSingleExperience = catchAsync(async (req, res) => {

    const id = req.params.id
    const result = await experienceServices.getSingleExperience(id)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks retrieved successfully',
        data: result
    })

})

const updateExperience = catchAsync(async (req, res) => {

    const blocksData = req.body
    const id = req.params.id

    const result = await experienceServices.updateExperience(id, blocksData)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks updated successfully',
        data: result
    })

})


const deleteExperience = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await experienceServices.deleteExperience(id)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks deleted successfully',
        data: result
    })

})

export const experienceControllers = {
    createExperience,
    getExperience,
    updateExperience,
    deleteExperience,
    getSingleExperience
}
