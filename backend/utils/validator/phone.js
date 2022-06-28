const { check } = require("express-validator");

const phoneValidator = [
    check("first_name").exists().notEmpty().isLength({ max: 50 }),
    check("last_name").exists().notEmpty().isLength({ max: 50 }),
    check("phone_number").exists().isInt().isLength({ max: 10 }),
    check("country_code").exists().isInt(),
];

exports.phoneValidator = phoneValidator;
