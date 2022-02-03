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
        type: Boolean,
        required: true
    },
    token: {
        type: String
    }
})

userSchema.pre('save', function(next) {
    console.log(this);
});


const userModel = mongoose.model('user', userSchema)

module.exports = {
    userSchema,
    userModel
}