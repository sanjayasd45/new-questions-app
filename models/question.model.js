const mongoose = require("mongoose");
const Schema = mongoose.Schema

const questionSchema = new Schema ({
    question : {
        type : String,
        required: true
    },
    topic : {
        type : String,
        require : true
    }, 
    tag : {
        type : Object,
        required : true
    },
    difficultyLevel : {
        type : String,
        required : true
    },
    questionAuthor : {
        type : String,
        required : true
    },
    answers : [
        {
            type : Schema.Types.ObjectId,
            ref : "Answer"
        }
    ]
},{
    timestamps : true
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question
