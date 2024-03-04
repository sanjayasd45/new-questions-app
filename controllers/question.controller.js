const WrapAsync = require("../helper/WrapAsync.js");
const Question = require("../models/question.model.js");
module.exports.renderQuestion = WrapAsync(async(req, res, next) => {
    const questionData = await Question.find();
    res.render("pages/questions.ejs", questionData);
});

module.exports.renderQuestionForm = (req, res, next) => {
    res.render("pages/add.question.ejs");
}

module.exports.addQuestion = WrapAsync(async(req, res, next) => {
    const questionData = req.body;
    const currUserName = currUser.username;
    const newQuestionData = {...questionData, currUserName};
    const addQuestion = new Question(newQuestionData);
    await addQuestion.save();
});

module.exports.deleteQuestion = WrapAsync(async(req, res, next) => {
    const {id} = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);
    res.redirect("/question")
});