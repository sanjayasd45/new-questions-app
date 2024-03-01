const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
    rating: {
        type: Number,
        required : true,
        min : 1,
        max : 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;
