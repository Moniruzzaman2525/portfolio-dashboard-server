import { model, Schema } from "mongoose"; import { TBlocks } from "./blocks.interface";
;

const blocksSchema = new Schema<TBlocks>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: {
        type: String,
        enum: ['ui-component', 'feature', 'layout', 'utility', 'integration'],
        required: true,
    },
    image: { type: String, required: true },
    code: { type: String },
}, {
    timestamps: true,
}
)


export const Blocks = model<TBlocks>("Blocks", blocksSchema)
