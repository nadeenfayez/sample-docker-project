// Only app configuration

const blogsRouter = require("./features/blogs/blogsRouter");
const express = require("express");
const cors = require("cors");
const loggerMiddleware = require("./middlewares/loggerMiddleware");


const app = express();


app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);


// Health check
app.get("/", (req, res) => {
    res.send("Docker Demo API is running.");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        timestamp: new Date().toISOString()
    });
});


app.use("/api/v1/blogs", blogsRouter);


module.exports = app;