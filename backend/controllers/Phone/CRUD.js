const { PhoneModel } = require("../../db/Schema/phoneSchema");
const { getPageNumberData } = require("../page");

const getPhoneNumbers = async (req, res) => {
    try {
        const { first_name, last_name, phone, page, item_per_page } = req.query;

        let query = { $or: [] };

        if (first_name) {
            query["$or"].push({
                first_name: { $regex: first_name, $options: "i" },
            });
        }

        if (last_name) {
            query["$or"].push({
                last_name: { $regex: last_name, $options: "i" },
            });
        }

        if (query["$or"].length == 0) {
            query = {};
        }

        const total = await PhoneModel.countDocuments({});
        const pageInfo = getPageNumberData(
            total,
            parseInt(page),
            parseInt(item_per_page)
        );
        const list = await PhoneModel.find(query)
            .sort({ createdAt: -1 })
            .skip(pageInfo.skip)
            .limit(pageInfo.limit);

        return res.status(200).send({
            message: "Phone numbers",
            page: {
                page: pageInfo.page,
                item_per_page: pageInfo.item_per_page,
                has_next: pageInfo.has_next,
            },
            data: list,
        });
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

const updatePhoneNumber = async (req, res) => {
    try {
        let id = req.params.id;
        let PhoneNumberData = req.body;

        await PhoneModel.findOneAndUpdate({ id }, PhoneNumberData);

        const updatedPhoneNumber = await PhoneModel.findById(id);

        return res.status(200).send({
            message: "Phone number updated in db",
            data: updatedPhoneNumber,
        });
    } catch (error) {
        console.log(error);
        return res
            .status(404)
            .send({ message: "Unable to update phone number" });
    }
};

const deletePhoneNumber = async (req, res) => {
    try {
        let id = req.params.id;
        await PhoneModel.findByIdAndDelete(id);

        return res.status(200).send({
            message: "Phone number deleted in db",
        });
    } catch (error) {
        console.log(error);
        return res
            .status(404)
            .send({ message: "Unable to delete phone number" });
    }
};

exports.addPhoneNumber = addPhoneNumber;
exports.getPhoneNumbers = getPhoneNumbers;
exports.updatePhoneNumber = updatePhoneNumber;
exports.deletePhoneNumber = deletePhoneNumber;
