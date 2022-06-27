const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
    await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

main()
    .then(() => {
        console.log("DB Connection Successfully");
    })
    .catch((err) => console.log(err));
