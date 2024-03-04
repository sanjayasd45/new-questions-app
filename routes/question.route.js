const express = require("express");
const router = express.Router();
const question = require("../controllers/question.controller.js");

router.get("/", 
    question.renderQuestion
);

router.get("/add", 
    question.renderQuestionForm
);

router.post("/add",
    question.addQuestion
);

router.delete("/delete/:id",
    question.deleteQuestion
);



module.exports = router
