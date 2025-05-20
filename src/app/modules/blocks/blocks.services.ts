import { TBlocks } from "./blocks.interface"
import { Blocks } from "./blocks.model"





const createBlock = async (payload: TBlocks): Promise<TBlocks> => {
    const blocks = await Blocks.create(payload)
    return blocks
}

const getBlocks = async (): Promise<TBlocks[]> => {
    const blocks = await Blocks.find({})
    return blocks
}

const updateBlocks = async (id: string, payload: TBlocks): Promise<TBlocks | null> => {
    const blocks = await Blocks.findOneAndUpdate({ _id: id }, payload, { new: true })
    return blocks
}

const deleteBlocks = async (id: string): Promise<TBlocks | null> => {
    const blocks = await Blocks.findOneAndDelete({ _id: id })
    return blocks
}

export const blocksServices = {
    createBlock,
    getBlocks,
    updateBlocks,
    deleteBlocks
}
