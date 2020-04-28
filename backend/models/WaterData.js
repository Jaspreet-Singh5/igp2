var mongoose = require("mongoose");

var WaterDataSchema = new mongoose.Schema({
    name:           String,
    area:           String,
    condition:      Number,
    availability:   Number
});

module.exports = mongoose.model("WaterData", WaterDataSchema);
