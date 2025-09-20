import express from "express"
import notesRoutes from "./Routes/notesRoutes.js"
import connectDB from "../config/db.js";

const app = express();
const PORT = process.env.PORT || 5001

connectDB();
//middleware to select the data
app.use(express.json())
app.use("/api/notes", notesRoutes)
//get route 

    // app.get("/api/notes", (req, res) => {
    //     res.send("you have got 5 notes")
    // })

app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`)
})