const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
    carnet: string,
    schedule: string,
    isLate: boolean,
    datetime: Date,
});

module.exports = mongoose.model("Register",RegisterSchema);
