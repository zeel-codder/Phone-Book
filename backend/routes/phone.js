var express = require("express");
var router = express.Router();

const { phoneValidator } = require("../utils/validator/phone");
const { pageValidator } = require("../utils/validator/page");
const { Validator } = require("../middleware/validator");
const {
    addPhoneNumber,
    getPhoneNumbers,
    updatePhoneNumber,
    deletePhoneNumber,
} = require("../controllers/Phone/CRUD");

router.get("/", pageValidator, Validator, getPhoneNumbers);
router.post("/add", phoneValidator, Validator, addPhoneNumber);
router.post("/update/:id", phoneValidator, Validator, updatePhoneNumber);
router.delete("/delete/:id", deletePhoneNumber);

module.exports = router;
