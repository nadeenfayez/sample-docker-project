const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());


app.get("/", (req, res) => {
    res.json([
        {
            id: "1",
            title: "Book 1"
        },
        {
            id: "2",
            title: "Book 2"
        },
        {
            id: "3",
            title: "Book 3"
        }
    ]);
});


app.listen(4000, (err) => {
    if (err) {
        console.error("Failed to connect to the server:", err);
        process.exit(1);
    } else {
        console.log("Listening for requests on port 4000.");
    }
});