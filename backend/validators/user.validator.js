const Joi = require('joi');

const userValidationSchema = Joi.object({
    username: Joi.string().min(3).max(20).pattern(/^[a-zA-Z0-9]*$/).required(),
    password: Joi.string().min(8)
    .pattern(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*]).*$'))
    .required(),
    email: Joi.string().email().required(),
});

module.exports = userValidationSchema;