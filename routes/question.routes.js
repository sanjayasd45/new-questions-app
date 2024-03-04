const express = require("express");
const router = express.Router();
const question = require("../controllers/question.controller.js");
const { isLoggedIn, isOwner } = require("../middlewares/user.middlewares.js");

router.get("/", 
    question.renderQuestion
);

router.get("/add",
    isLoggedIn,
    question.renderQuestionForm
);

router.post("/add",
    isLoggedIn,
    question.addQuestion
);

router.delete("/delete/:id",
    isLoggedIn,
    isOwner,
    question.deleteQuestion
);



module.exports = router
