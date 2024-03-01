const express = require("express");
const router = express.Router();
const question = require("../controllers/question.controller.js");

router.get("/", question.renderQuestion)


module.exports = router
