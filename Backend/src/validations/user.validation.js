const Joi = require("joi");

const userValidation = Joi.object({
    name: Joi.string().required().trim().max(100),
    email: Joi.string().required().trim().lowercase().max(100),
    password: Joi.string().required().min(6).max(255)
})

const loginValidation = Joi.object({
    email: Joi.string().required().trim().lowercase().max(100),
    password: Joi.string().required().min(6).max(255)
})

module.exports = {userValidation,loginValidation};