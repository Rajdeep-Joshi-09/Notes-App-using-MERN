import express from "express"
import notesRoutes from "./Routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes)
//get route 

    // app.get("/api/notes", (req, res) => {
    //     res.send("you have got 5 notes")
    // })

app.listen(5001, () => {
    console.log("server started on port: 5001")
})