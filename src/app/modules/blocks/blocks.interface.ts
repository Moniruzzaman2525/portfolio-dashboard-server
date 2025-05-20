

// types/component.ts

export interface TBlocks {
    _id?: string
    name: string
    description: string
    type: 'ui-component' | 'feature' | 'layout' | 'utility' | 'integration'
    code: string
    createdAt?: string
    updatedAt?: string
    image?: string
}
