const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const joi = require('../validators/user.validator');


// register 
exports.create = async (req, res) => {
    console.log("Create User");

    let data = req.body;

    const { error } = joi.validate(data);
    if (error) {
        return res.status(400).json({status:false, message: error.details[0].message })
    }

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltOrRounds)

    const newUser = new User({
        username: data.username,
        password: hashedPassword,
        email: data.email,
        role: "user"
    });

    try {
        // check if users exists
        const existingUser = await User.findOne({ 
            $or: [{email: newUser.email}, { username: newUser.username}]
        })

        if (existingUser) {
            return res.status(400).json({status: false, data: "User with this email or username already exists"})
        }

        const result = await newUser.save();
        res.status(201).json({status: true, data: result})
    } catch (err) {
        console.log("Problem in creating user", err);
        res.status(500).json({status: false, data: err})
    }

}