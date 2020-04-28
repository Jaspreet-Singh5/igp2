var mongoose = require("mongoose");

var RoadConditionDataSchema = new mongoose.Schema({
    name:           String,
    area:           String,
    type:           String,
    rating:         Number
});

module.exports = mongoose.model("RoadConditionData", RoadConditionDataSchema);
