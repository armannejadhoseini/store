const itemModel = require('../models/item');


//get all items
const getItems = async (req, res) => {
    try {
        items = await itemModel.find();
        res.json(items);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//create an item
const createItems = async (req, res) => {
    try {
        const item = new itemModel({
            category: req.body.category,
            subCategory: req.body.subCategory,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            image: req.body.image,
            price: req.body.price
        });
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//update an item
const updateItems = async (req, res) => {
    try {
        item = await itemModel.findOneAndUpdate({_id: req.params.id}, req.body)
        res.json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//delete an item
const deleteItems = async (req, res) => {
    try {
        item = await itemModel.findByIdAndDelete({_id: req.params.id})
        res.json(item);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


module.exports = {
    getItems,
    createItems,
    updateItems,
    deleteItems
};