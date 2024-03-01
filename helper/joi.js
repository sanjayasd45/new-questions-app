const joi = require("joi");

const validateUser = joi.object({
    name : joi.string().required(),
    email : joi.string().required(),
    password : joi.string().required(),
});

const validateAnswer = joi.object({
    answer : joi.string().required() 
});
const validateRating = joi.object({
    rating : joi.number().required().min(1).max(5) 
});
const validateQuestion = joi.object({
    question : joi.string().required(),
    topic : joi.string().required(),
    tag : joi.string().required(),
    difficultyLevel : joi.string().required(),
    questionAuthor : joi.string().required(),
});

module.exports = {validateUser, validateAnswer, validateQuestion, validateRating};