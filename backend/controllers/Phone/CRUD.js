const { PhoneModel } = require("../../db/Schema/phoneSchema");

const getPhoneNumbers = async (req, res) => {
    try {
        const list = await PhoneModel.find({});

        return res.status(200).send({ message: "Phone numbers", data: list });
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

const addPhoneNumber = async (req, res) => {
    try {
        let PhoneNumberData = req.body;

        const newPhoneNumber = new PhoneModel(PhoneNumberData);
        await newPhoneNumber.save(async (err) => {
            if (err) {
                return res.status(404).send({ message: err });
            }

            return res
                .status(200)
                .send({ message: "Phone number added in db" });
        });
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

exports.addPhoneNumber = addPhoneNumber;
exports.getPhoneNumbers = getPhoneNumbers;
