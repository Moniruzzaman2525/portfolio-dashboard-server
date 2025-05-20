import { model, Schema } from "mongoose"; import { TBlocks } from "./blocks.interface";
;

const blocksSchema = new Schema<TBlocks>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: {
        type: String,
        enum: ['ui-component', 'api', 'utility', 'custom'],
        required: true,
    },
    project: { type: String, required: true },
    code: { type: String },
}, {
    timestamps: true,
}
)


export const Blocks = model<TBlocks>("Blocks", blocksSchema)
