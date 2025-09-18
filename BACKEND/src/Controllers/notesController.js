export const getAllNotes = (req, res) => {
    res.status(200).send("you have got 5 notes")
}

export const createNote = (req, res) => {
    res.status(201).json({message: "Route created successfully"})
}

export const updateNotes = (req, res) => {
    res.status(200).json({message: "Route updated successfully"})
}

export const deleteNotes = (req ,res) => {
    res.status(200).json({message: "Route deleted successfully"})
}