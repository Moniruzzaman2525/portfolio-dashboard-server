import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { contactsServices } from "./contacts.services"




const contactME = catchAsync(async (req, res) => {
    console.log(req.body);
    const contactData = req.body
    const result = await contactsServices.contactME(contactData)

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Message sent successfully',
        data: result
    })

})

export const contactsControllers = {
    contactME
}
