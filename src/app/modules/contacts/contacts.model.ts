import { model, Schema } from "mongoose";
import { TContacts } from "./contacts.interface";
;

const contactSchema = new Schema<TContacts>({
    name: { type: String },
    email: { type: String },
    message: { type: String },
    subject: { type: String },
}, {
    timestamps: true,
}
)


export const Contacts = model<TContacts>("Contacts", contactSchema)
