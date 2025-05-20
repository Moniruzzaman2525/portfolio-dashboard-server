import { model, Schema } from "mongoose";
import { TSkills } from "./skills.interface";
;

const blocksSchema = new Schema<TSkills>({
    name: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
}
)


export const Skills = model<TSkills>("Skills", blocksSchema)
