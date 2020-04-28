var mongoose = require("mongoose");

var healthDataSchema = new mongoose.Schema({
    name:           String,
    healthIssue:    String,
    beatRate:       Number,
    bodyTemp:       Number,
    serviceAvail:   Number
});

module.exports = mongoose.model("HealthData", healthDataSchema);
