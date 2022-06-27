var express = require("express");
var router = express.Router();

const { phoneValidator } = require("../utils/validator/phone");
const {
    addPhoneNumber,
    getPhoneNumbers,
} = require("../controllers/Phone/CRUD");

/* GET home page. */
router.get("/", getPhoneNumbers);
router.post("/add", phoneValidator, addPhoneNumber);

module.exports = router;
