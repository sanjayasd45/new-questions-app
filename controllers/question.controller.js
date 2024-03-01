const WrapAsync = require("../helper/WrapAsync.js");
const Question = require("../models/question.model.js");
module.exports.renderQuestion = WrapAsync(async(req, res, next) => {
    const questionData = await Question.find();
    res.render("pages/question.ejs", questionData);
});

module.exports.addQuestion = WrapAsync(async(req, res, next) => {
    const {id} = req.params;
    const questionData = req.body;
    const currUserName = currUser.username;
    const newQuestionData = {...questionData, currUserName};
    const addQuestion = new Question(newQuestionData);
})
