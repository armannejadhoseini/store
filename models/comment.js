const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'items',
        required: true
    }
},
    {
        timestamps: true,
    });

commentModel = mongoose.model('comment', commentSchema);

module.exports = commentModel;