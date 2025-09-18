import express from "express"

import { getAllNotes, createNote, updateNotes, deleteNotes } from "../Controllers/notesController.js"
const router = express.Router();

//common route

router.get("/", getAllNotes)

router.post("/", createNote)

router.put("/:id", updateNotes)

router.delete("/:id", deleteNotes)


// example routes

// app.get("/api/notes", (req, res) => {
//     res.status(200).send("you have got 5 notes")
// })

// app.post("/api/notes", (req, res) => {
//     res.status(201).json({message: "Route created successfully"})
// })

// app.put("/api/notes/:id", (req, res) => {
//     res.status(200).json({message: "Route updated successfully"})
// })

// app.delete("/api/notes/:id", (req ,res) => {
//     res.status(200).json({message: "Route deleted successfully"})
// })



export default router;