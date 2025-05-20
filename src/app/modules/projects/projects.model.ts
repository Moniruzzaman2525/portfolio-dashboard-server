import { model, Schema } from "mongoose";
import { TProject } from "./projects.interface";

const projectSchema = new Schema<TProject>({
    name: { type: String, required: true, minlength: 2 },
    description: { type: String, required: true, minlength: 10 },
    status: {
        type: String,
        enum: ["planning", "active", "in-progress", "completed", "on-hold"],
        required: true,
    },
    startDate: { type: String, required: true },
    image: { type: String, required: true },
    endDate: { type: String },
    owner: { type: String, required: true, minlength: 2 },
}, {
    timestamps: true,
})


export const Project = model<TProject>("Project", projectSchema)
