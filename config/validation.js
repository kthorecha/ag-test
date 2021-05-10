const Joi = require('joi');
const db = require('../dbConnect');

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(4).required(),
        password: Joi.string().min(4).required()
    });
    return schema.validate(data);
}

const registerValidation = data => {
    const schema = Joi.object({
        firstname: Joi.string().min(3).required(),
        lastname: Joi.string().min(3).required(),
        organization: Joi.string().min(3).required(),
        email: Joi.string().min(4).required(),
        password: Joi.string().min(4).required()
    });
    return schema.validate(data);
}

async function emailValidation(email, cb) {
    let sql = `SELECT * FROM users WHERE email = '${email}'`;
    // console.log(sql)
    // let resp;
    db.query(sql, function(err, result) {
        console.log(err,' ddd ',result.length)
        if (err) cb(false);
        if (result.length > 0) {
            // console.log(result)
            cb(result[0])
        } else {
            cb(false)
        }
    });
    return;
}

module.exports = {
    loginValidation: loginValidation,
    registerValidation: registerValidation,
    emailValidation: emailValidation
}