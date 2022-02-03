const { userModel } = require('../models/user')

//error handler
const errorHandler = (err) => {
    let errors = ''

    //validation error
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach((properties) => {
            errors += properties.message;
        });
    }
}

//routes
const signUp = async (req, res) => {
    const { name, email, password, type } = req.body
    const newUser = new userModel({
        name,
        email,
        password,
        type
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        const error = errorHandler(err);
        res.status(400).json(error);
    }
    res.json(req.body)
}

const signIn = (req, res) => {
    
}

const signOut = (req, res) => {
    
}

//export routes
module.exports = {
    signUp,
    signIn,
    signOut
}