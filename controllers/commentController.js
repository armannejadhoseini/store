const commentModel = require('../models/comment');

const getComments = (req, res) => {
    const comments = commentModel.find();
    res.json(comments)
};

const getComment = (req, res) => {

};

const makeComment = async (req, res) => {
    const { title, body, user, item } = req.body;
    const newComment = new commentModel({
        title: title,
        body: body,
        user: user,
        item: item
    });

    try {
        const comment = await newComment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json(err);
    };
};


module.exports = {
    getComments,
    getComment,
    makeComment
};