var mongoose = require("mongoose");

var CrimeDataSchema = new mongoose.Schema({
    name:           String,
    area:           String,
    type:           String,
    rating:         Number
});

module.exports = mongoose.model("CrimeData", CrimeDataSchema);
