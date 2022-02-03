const { Int32 } = require('mongodb')
const mongoose = require('mongoose')
const { isEmail } = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        minlength: 4
    },
    email: {
        type: String,
        required: [true, 'Please enter a email address'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8,'Password must atleat be 8 chracters']
    },
    type: {
        type: Int32
    },
    token: {
        type: String
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = {
    userSchema,
    userModel
}