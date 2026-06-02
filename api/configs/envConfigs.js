if (process.env.NODE_ENV !== "production") {
    process.loadEnvFile("../.env");
}


module.exports = {
    port: process.env.PORT || 4000,
    mongoUri: process.env.MONGO_URI,
    nodeEnv: process.env.NODE_ENV
};