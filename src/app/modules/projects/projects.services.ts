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

const updateProject = async (id: string, payload: TProject): Promise<TProject | null> => {
    const project = await Project.findOneAndUpdate({ _id: id }, payload, { new: true })
    return project
}

const deleteProject = async (id: string): Promise<TProject | null> => {
    const project = await Project.findOneAndDelete({ _id: id })
    return project
}

export const projectServices = {
    createProjectIntoDB,
    getProjects,
    updateProject,
    deleteProject
}
