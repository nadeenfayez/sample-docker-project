const mongoose = require("mongoose");
const { mongoUri } = require("../configs/envConfigs");


mongoose.connection.on("connected", () => console.log("MongoDB connected successfully."));
mongoose.connection.on("error", (err) => console.error("MongoDB connection error:", err));

const connectDB = async () => {
    await mongoose.connect(mongoUri);
};


module.exports = connectDB;