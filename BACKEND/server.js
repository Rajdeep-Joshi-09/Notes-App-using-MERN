import express from "express"

const app = express();

//get route 

    app.get("/api/notes", (req, res) => {
        res.send("you have got 5 notes")
    })

app.listen(5001, () => {
    console.log("server started on port: 5001")
})