const blogsRouter = require("./features/blogs/blogsRouter");
const express = require("express");
const cors = require("cors");
const connectDB = require("./DB/connection");
const loggerMiddleware = require("./middlewares/loggerMiddleware");


const app = express();


app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);

connectDB();

// Health check
app.get("/", (req, res) => {
    res.send("OK");
});

app.use("/api/v1/blogs", blogsRouter);


app.listen(4000, "0.0.0.0", (err) => {
    if (err) {
        console.error("Failed to connect to the server:", err);
        process.exit(1);
    } else {
        console.log("Listening for requests on port 4000.");
    }
});