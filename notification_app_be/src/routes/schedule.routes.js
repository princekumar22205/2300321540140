const express = require("express");

const router = express.Router();

const {
    getSchedule
} = require("../controllers/schedule.controller");

router.get("/schedule",getSchedule);

module.exports = router;