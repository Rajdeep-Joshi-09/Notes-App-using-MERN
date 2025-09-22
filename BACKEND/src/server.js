import express from "express"
import notesRoutes from "./Routes/notesRoutes.js"
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001

//middleware to select the data
app.use(cors({
    origin: "http://localhost:5173"
}
))
app.use(express.json())
app.use(rateLimiter)
app.use("/api/notes", notesRoutes)
//get route 

// app.get("/api/notes", (req, res) => {
    //     res.send("you have got 5 notes")
    // })
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server started on port: ${PORT}`)
    })
});