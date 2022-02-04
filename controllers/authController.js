const userModel = require('../models/user');
const bcrypt = require('bcrypt');

//routes
const signUp = async (req, res) => {
    const { name, email, password, type } = req.body;
    const newUser = new userModel({
        name: name,
        email: email,
        password: password,
        type: type
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json(err);
    };
};

const signIn = async (req, res) => {
    const { email, password } = req.body;

    if(!(email && password)) {
        res.status(400).send('All fields are required');
    }

    const user = await userModel.findOne({ email: email })

    if (!user) {
        let error = {
            error: 'User does not exist'
        };
        res.json(error);
    } else {
        let status = {
            logedIn: null
        };

    const loginstatus = await bcrypt.compare(password, user.password);
    
    if (loginstatus) {
        status = {
            logedIn: true
        }
    }
    else {
        status = {
            logedIn: false
        }
    };
    res.json(status)
}
};

//export routes
module.exports = {
    signUp,
    signIn
};