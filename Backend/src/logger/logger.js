const { createLogger, format, transports } = require("winston");

const { combine, timestamp, printf, colorize } = format;

const myFormat = printf((info) => {
  // timestamp is guaranteed after timestamp() is applied
  return `${info.timestamp} [${info.level}]: ${info.message}`;
});

const loggerInstance = createLogger({
  level: "info",
  format: combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" })
  ],
  exitOnError: false
});

module.exports = { logger: loggerInstance };
