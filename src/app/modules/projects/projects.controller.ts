import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { projectServices } from "./projects.services"



const createUserController = catchAsync(async (req, res) => {
    const userData = req.body
    const result = await projectServices.createProjectIntoDB(userData)

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Project created successfully',
        data: result
    })

})



export const projectControllers = {
    createUserController
}
