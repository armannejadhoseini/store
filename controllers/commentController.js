const commentModel = require('../models/comment');

//get all comments
const getComments = (req, res) => {
    try {
        const comments = commentModel.find({ item: req.params.id });
        res.json(comments)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//create a comment
const makeComment = async (req, res) => {
    try {
        const comment = new commentModel({
            title: req.body.title,
            body: req.body.body,
            user: req.body.user,
            item: req.body.item
        });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};


module.exports = {
    getComments,
    makeComment
};