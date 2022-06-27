const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
    first_name: { type: String, required: true, unique: true },
    last_name: { type: String, required: true, unique: true },
    phone: { type: Number, unique: true, unique: true },
    country_code: { type: Number },
});

const PhoneModel = mongoose.model("Phone", phoneSchema);

export { PhoneModel };
