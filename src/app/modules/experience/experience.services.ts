
import { TSkills } from "./experience.interface"
import { Skills } from "./experience.model"






const createSkills = async (payload: TSkills): Promise<TSkills> => {
    const result = await Skills.create(payload)
    return result
}

const getSkills = async (): Promise<TSkills[]> => {
    const result = await Skills.find({})
    return result
}

const updateSkills = async (id: string, payload: TSkills): Promise<TSkills | null> => {
    const result = await Skills.findOneAndUpdate({ _id: id }, payload, { new: true })
    return result
}

const deleteSkills = async (id: string): Promise<TSkills | null> => {
    const result = await Skills.findOneAndDelete({ _id: id })
    return result
}


const getSingleSkills = async (id: string): Promise<TSkills | null> => {
    const result = await Skills.findById(id)
    return result
}

export const skillsServices = {
    createSkills,
    getSkills,
    updateSkills,
    deleteSkills,
    getSingleSkills
}
