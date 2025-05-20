import { Contacts } from "./contacts.model"


const contactME = async (payload: any): Promise<any> => {
    const result = await Contacts.create(payload)
    return result
}

export const contactsServices = {
    contactME
}
