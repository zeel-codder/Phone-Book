const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
    first_name: { type: String, required: true, unique: true },
    last_name: { type: String, required: true },
    phone: {
        type: Number,
        unique: true,
        validate: {
            validator: function (val) {
                return val.toString().length === 10;
            },
            message: (val) => `${val.value} has to be 10 digits`,
        },
    },
    country_code: { type: Number },
});

const PhoneModel = mongoose.model("Phone", phoneSchema);

exports.PhoneModel = PhoneModel;
