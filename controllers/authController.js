const userModel = require('../models/user');
const bcrypt = require('bcrypt');

//routes
const signUp = async (req, res) => {
    try {
        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });

    };
};

const signIn = async (req, res) => {
    const { email, password } = req.body;

    //check the req for both fields
    if (!(email && password)) {
        res.status(400).json({ message: 'All fields are required' });
    }

    //make a user obj and check if it exists
    const user = await userModel.findOne({ email: email })
    if (!user) {
        res.status(400).json({ message: 'User does not exist' });
    } else {
        const status = await user.compare(password);
        res.json(status);
    }
};

//export routes
module.exports = {
    signUp,
    signIn
};