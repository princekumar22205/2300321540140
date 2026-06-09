const express = require("express");
const logger = require("./middleware/logger");

const scheduleRoutes = require("./routes/schedule.routes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api",scheduleRoutes);

module.exports = app;