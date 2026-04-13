const blogsRouter = require("./features/blogs/blogsRouter");
const express = require("express");
const cors = require("cors");
const connectDB = require("./DB/connection");


const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/blogs", blogsRouter);


app.listen(4000, (err) => {
    if (err) {
        console.error("Failed to connect to the server:", err);
        process.exit(1);
    } else {
        console.log("Listening for requests on port 4000.");
    }
});