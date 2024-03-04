const WrapAsync = require("../helper/WrapAsync");
const Answer = require("../models/answer.model");
const Question = require("../models/question.model");


module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){ 
        res.redirect("/user/login");
    };
    next();
};

module.exports.isOwner = WrapAsync(async(req, res, next) => {
    const {id, answerId} = req.params;
    if(answerId === undefined){
        const questionData = await Question.findById(id)
        if(questionData.questionAuthor === res.locals.currUser.username){
            return next();
        }else{
            // changes required
            res.redirect("/question");
        };
    }else{
        const answerData = await Answer.findById(answerId);
        if(answerData.answerAuthor === res.locals.currUser.username){
            return next();
        }else{
            // changes required
            res.redirect("/question");
        };
    };

});