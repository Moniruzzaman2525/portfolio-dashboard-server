import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { projectServices } from "./projects.services"



const createUserController = catchAsync(async (req, res) => {
    const projectData = req.body
    const result = await projectServices.createProjectIntoDB(projectData)

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Project created successfully',
        data: result
    })

})
const getProjects = catchAsync(async (req, res) => {

    const result = await projectServices.getProjects()

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Project retrieved successfully',
        data: result
    })

})

const updateProject = catchAsync(async (req, res) => {

    const projectData = req.body
    const id = req.params.id

    const result = await projectServices.updateProject(id, projectData)

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Project updated successfully',
        data: result
    })

})


export const projectControllers = {
    createUserController,
    getProjects,
    updateProject
}
