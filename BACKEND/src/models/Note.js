import mongoose, { Schema } from "mongoose";

// 1 - create a Schema
// 2 - model based off of that schema

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}) 

const Note = mongoose.model("Note", noteSchema);

export default Note;