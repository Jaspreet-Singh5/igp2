var mongoose = require("mongoose");

var ElectricityDataSchema = new mongoose.Schema({
    name:           String,
    cutDuration:    Number,
    area:           String
});

module.exports = mongoose.model("ElectricityData", ElectricityDataSchema);
