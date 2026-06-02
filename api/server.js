// Runtime things

const app = require("./app");
const { port } = require("./configs/envConfigs");
const connectDB = require("./DB/connection");


connectDB();


app.listen(port, "0.0.0.0", (err) => {
    if (err) {
        console.error("Failed to connect to the server:", err);
        process.exit(1);
    }

    console.log(`Listening for requests on port ${port}.`);
});