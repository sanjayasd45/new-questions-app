const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
    answer: {
        type: String,
        required: true
    },
    answerAuthor: {
        type: String,
        required: true
    },
    rating: [
        {
           type: Schema.Types.ObjectId,
           ref: "Rating"
        }
    ]
}, {
    timestamps: true
});


const Answer = mongoose.model('Answer', answerSchema);


module.exports = Answer
