import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { skillsServices } from "./experience.services"



const createSkills = catchAsync(async (req, res) => {
    const blocksData = req.body
    const result = await skillsServices.createSkills(blocksData)

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Skills created successfully',
        data: result
    })

})
const getSkills = catchAsync(async (req, res) => {

    const result = await skillsServices.getSkills()

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks retrieved successfully',
        data: result
    })

})
const getSingleSkills = catchAsync(async (req, res) => {

    const id = req.params.id
    const result = await skillsServices.getSingleSkills(id)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks retrieved successfully',
        data: result
    })

})

const updateSkills = catchAsync(async (req, res) => {

    const blocksData = req.body
    const id = req.params.id

    const result = await skillsServices.updateSkills(id, blocksData)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks updated successfully',
        data: result
    })

})


const deleteSkills = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await skillsServices.deleteSkills(id)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Blocks deleted successfully',
        data: result
    })

})

export const skillController = {
    createSkills,
    getSkills,
    updateSkills,
    deleteSkills,
    getSingleSkills
}
