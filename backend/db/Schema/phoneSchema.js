const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
    name: { type: String, unique: true },
});

const PhoneModel = mongoose.model("Phone", phoneSchema);

export { PhoneModel };
