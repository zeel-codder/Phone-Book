const { check } = require("express-validator");

const pageValidator = [
    check("page").exists().isInt().isLength({ min: 1 }),
    check("item_per_page").exists().isInt().isLength({ min: 1, max: 50 }),
];

exports.pageValidator = pageValidator;
