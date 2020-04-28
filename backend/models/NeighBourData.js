var mongoose = require("mongoose");

var NeighbourDataSchema = new mongoose.Schema({
    name:           String,
    area:           String,
    rating:         Number
});

module.exports = mongoose.model("NeighbourData", NeighbourDataSchema);
