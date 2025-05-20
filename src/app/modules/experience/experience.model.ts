import { model, Schema } from "mongoose";
import { TExperience } from "./experience.interface";
;

const blocksSchema = new Schema<TExperience>({
    company: { type: String, required: true },
    image: { type: String, required: true },
    role: { type: String, required: true },
    startData: { type: String, required: true },
    description: { type: String, required: true },
    endData: { type: String },
}, {
    timestamps: true,
}
)


export const Experience = model<TExperience>("Experience", blocksSchema)
