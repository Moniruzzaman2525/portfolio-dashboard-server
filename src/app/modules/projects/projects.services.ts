import { TProject } from "./projects.interface"
import { Project } from "./projects.model"



const createProjectIntoDB = async (payload: TProject): Promise<TProject> => {
    const project = await Project.create(payload)
    return project
}

const getProjects = async (): Promise<TProject[]> => {
    const project = await Project.find({})
    return project
}



export const projectServices = {
    createProjectIntoDB,
    getProjects
}
