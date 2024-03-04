const WrapAsync = require("../helper/WrapAsync");
const Answer = require("../models/answer.model");
const Question = require("../models/question.model");


module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){ 
        req.session.redirectUrl = req.originalUrl;
        res.redirect("/user/login");
    };
    next();
};

module.exports.isOwner = WrapAsync(async (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/user/login");
    }

    const { id, answerId } = req.params;
    let data, authorField;

    if (answerId === undefined) {
        data = await Question.findById(id);
        authorField = 'questionAuthor';
    } else {
        data = await Answer.findById(answerId);
        authorField = 'answerAuthor';
    }

    if (data && data[authorField] === res.locals.currUser.username) {
        return next();
    } else {
        return res.redirect("/question");
    }
});