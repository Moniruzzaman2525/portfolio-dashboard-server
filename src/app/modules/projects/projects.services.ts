import { TProject } from "./projects.interface"
import { Project } from "./projects.model"



const createProjectIntoDB = async (payload: TProject): Promise<TProject> => {
    const project = await Project.create(payload)
    return project
}


export const projectServices = {
    createProjectIntoDB
}
