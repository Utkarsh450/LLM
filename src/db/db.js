const mongoose = require("mongoose");
const logger = require("../logger/logger").logger;
const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      logger.info("Connected to MongoDB");
    })
    .catch((err) => {
      logger.error("Error connecting to MongoDB", err);
    });
};

module.exports = connectToDB;
