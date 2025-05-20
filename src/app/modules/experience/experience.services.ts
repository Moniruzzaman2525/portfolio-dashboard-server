import { TExperience } from "./experience.interface"
import { Experience } from "./experience.model"



const createExperience = async (payload: TExperience): Promise<TExperience> => {
    const result = await Experience.create(payload)
    return result
}

const getExperience = async (): Promise<TExperience[]> => {
    const result = await Experience.find({})
    return result
}

const updateExperience = async (id: string, payload: TExperience): Promise<TExperience | null> => {
    const result = await Experience.findOneAndUpdate({ _id: id }, payload, { new: true })
    return result
}

const deleteExperience = async (id: string): Promise<TExperience | null> => {
    const result = await Experience.findOneAndDelete({ _id: id })
    return result
}


const getSingleExperience = async (id: string): Promise<TExperience | null> => {
    const result = await Experience.findById(id)
    return result
}

export const experienceServices = {
    createExperience,
    getExperience,
    updateExperience,
    deleteExperience,
    getSingleExperience
}
