import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
    try  {
        const notes = await Note.find()
        res.status(200).json(notes);
    } catch(error) {    
        res.status(500).json({message: "Internal Server Error"});
        console.error("Error while fetching notes", error);
    }
}

export const createNote = async (req, res) => {
try {
    const {title, content} = req.body
    const newNote = new Note({title: title, content: content})

    await newNote.save()
    res.status(201).json({message: "Note created successfully", note: newNote})
} catch (error) {
    res.status(500).json({message: "Internal Server Error"});
    console.error("Error while creating note", error);
}
}

export const updateNotes = async (req, res) => {
    try {
        const {title, content} = req.body
        await Note.findByIdAndUpdate(req.params.id, {title, content})
        res.status(200).json({message: "Record updated successfully"})
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
        console.error("Error while updating note", error);
    }
}

export const deleteNotes = async (req ,res) => {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Record deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.error("Error while deleting note", error)
    }
}