

export interface TProject {
    _id?: string
    name: string
    description: string
    status: 'planning' | 'active' | 'in-progress' | 'completed' | 'on-hold'
    startDate: string
    endDate: string | null
    owner: string
}
