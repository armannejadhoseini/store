const mongoose = require('mongoose');
const Schema = mongoose.Schema

const itemSchema = new Schema({

    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
});

const itemModel = mongoose.model('item', itemSchema);

module.exports = itemModel;