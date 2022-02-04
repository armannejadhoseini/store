const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;


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

userSchema.pre('save', true, async function(next, done) {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    done();
});


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;