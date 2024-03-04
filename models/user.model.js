const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLM = require("passport-local-mongoose");

const userSchema = new Schema({
    photo : {
        type : String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    addedQuestions : [
        {
            type: Schema.Types.ObjectId,
            ref : "Question"
        }
    ],
    solvedQuestions : [
        {
            type : Schema.Types.ObjectId,
            ref : "Answer"
        }
    ], 
    ratedQuestions : [
        {
            type : Schema.Types.ObjectId,
            ref : "Question"
        }
    ],
    TimeGivenToSite : {
        type : Number,
        default : 0
    },
});

userSchema.plugin(passportLM)
const User = mongoose.Model("User", userSchema);

module.exports = User;