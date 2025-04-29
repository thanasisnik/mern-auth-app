const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required field"],
        max: 20,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required field'],
        minlength: 6
    },
    email: {
        type: String,
        required: [true, 'Email is required field'],
        max: 20,
        unique: true,
        trim: true,
        lowercase: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }},
    {
        collection: 'users',
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);