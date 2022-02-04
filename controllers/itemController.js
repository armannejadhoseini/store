const itemModel = require('../models/item');
const commentModel = require('../models/comment');
const { getComments } = require('./commentController');

const getItems = async (req, res) => {
    try {
        items = await itemModel.find()
        .populate({
            path: 'comments._id',
            model: 'comment',

        }).exec()
        res.json(items)
    } catch (err) {
        res.json(err);
    }
};

const makeItem = async (req, res) => {
    const { category, subCategory, name, description, color, image } = req.body;
    const newItem = new itemModel({
        category: category,
        subCategory: subCategory,
        name: name,
        description: description,
        color: color,
        image: image
    });
    try {
        const item = await newItem.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json(err);
    };
}


module.exports = {
    getItems,
    makeItem
};