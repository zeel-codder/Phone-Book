const { validationResult } = require("express-validator");

const Validator = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new Error(JSON.stringify(errors.errors));
        }

        next();
    } catch (err) {
        const message = JSON.parse(err.message)[0].msg;
        console.log(err);
        return res.status(500).send({ message });
        // console.log(err);
    }
};

exports.Validator = Validator;
