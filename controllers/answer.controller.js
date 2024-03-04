const WrapAsync = require("../helper/WrapAsync.js");
const Answer = require("../models/answer.model.js");
const Question = require("../models/question.model.js");

module.exports.addAnswer  = WrapAsync(async(req, res, next) => {
    const {id} = req.params;
    const questionData = await Question.findById(id);
    const answerAuthor = currUser.username;
    const answerData = {...req.body, answerAuthor};
    questionData.answers.push(answerData);
    await Promise.all([new Answer(answerData).save(), questionData.save()]);
    res.redirect(`/question/${id}`);
})

module.exports.editAnswer = WrapAsync(async(req, res, next) => {
    const {id, answerId} = req.params;
    const answerData = req.body;
    const updatedAnswer = await Answer.findByIdAndUpdate(answerId, answerData);
    await updatedAnswer.save();
    res.redirect(`/question/${id}`);
});

module.exports.deleteAnswer = WrapAsync(async(req, res, next) => {
    const {id, answerId} = req.params;
    const deletedAnswer = await Answer.findByIdAndDelete(answerId);
    const updatedQuestion = await Question.findByIdAndUpdate(id, {$pull : {answers : answerId}});
    res.redirect(`/question/${id}`);
})