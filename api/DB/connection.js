const mongoose = require("mongoose");


mongoose.connection.on("connected", () => console.log("MongoDB connected successfully."));
mongoose.connection.on("error", (err) => console.error("MongoDB connection error:", err));

const connectDB = async () => {
    await mongoose.connect("mongodb://mongo:27017/blogs-website");
};


module.exports = connectDB;