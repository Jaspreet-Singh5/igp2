var mongoose = require("mongoose");

var WasteDataSchema = new mongoose.Schema({
    name:           String,
    location:       String,
    area:           String,
    rating:         Number
});

module.exports = mongoose.model("WasteData", WasteDataSchema);
