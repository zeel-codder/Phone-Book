var express = require("express");
var router = express.Router();

const { phoneValidator } = require("../utils/validator/phone");
const { Validator } = require("../middleware/validator");
const {
    addPhoneNumber,
    getPhoneNumbers,
    updatePhoneNumber,
    deletePhoneNumber,
} = require("../controllers/Phone/CRUD");

router.get("/", getPhoneNumbers);
router.post("/add", phoneValidator, Validator, addPhoneNumber);
router.put("/update/:id", phoneValidator, Validator, updatePhoneNumber);
router.delete("/delete/:id", deletePhoneNumber);

module.exports = router;
