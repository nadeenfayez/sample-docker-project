const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());


app.get("/", (req, res) => {
    res.json([
        {
            id: "1",
            title: "Atomic Habits",
            description: "A book about building good habits and breaking bad ones through small daily improvements."
        },
        {
            id: "2",
            title: "The Alchemist",
            description: "A young shepherd travels in search of treasure and discovers the importance of following his dreams."
        },
        {
            id: "3",
            title: "The Prophet",
            description: "A poetic collection of philosophical reflections about love, freedom, work, and the meaning of life."
        },
        {
            id: "4",
            title: "Clean Code",
            description: "A practical guide to writing readable, maintainable, and professional-quality code."
        },
        {
            id: "5",
            title: "Deep Work",
            description: "Explains how focused, distraction-free work leads to greater productivity and success."
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