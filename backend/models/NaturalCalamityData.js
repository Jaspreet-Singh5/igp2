var mongoose = require("mongoose");

var NaturalCalamityDataSchema = new mongoose.Schema({
    name:           String,
    type:           String,
    area:           String,
    rating:         Number
});

module.exports = mongoose.model("NaturalCalamityData", NaturalCalamityDataSchema);
    