const bcrypt = require('bcrypt');
const User = require('../models/user.model')
const authService = require('../services/auth.service');

exports.login = async (req, res) => {

    const {username, password} = req.body;

    try {
        const result = await User.findOne({ username })
        if (!result) {
            return res.status(404).json({ status: false, data: 'User not found'})
        }

        const isMatch = await bcrypt.compare(password, result.password);

        if (isMatch) {
            const token = authService.generateAccessToken(result);
            return res.status(200).json({status: true, data: token});
        } else {
            return res.status(401).json({ status: false, data: "Invalid credentials" });
        }
    } catch (err) {
        res.status(400).json({ status: false, data: err });
    }
}