const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true, unique: true },
        last_name: { type: String, required: true },
        phone_number: {
            type: Number,
            unique: true,
            validate: {
                validator: function (val) {
                    return val.toString().length === 10;
                },
                message: (val) => `${val.value} has to be 10 digits`,
            },
        },
        phone_country_code: { type: Number },
    },
    { timestamps: true }
);

const PhoneModel = mongoose.model("Phone", phoneSchema);

exports.PhoneModel = PhoneModel;
