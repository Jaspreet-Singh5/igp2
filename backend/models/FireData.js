var mongoose = require("mongoose");

var FireDataSchema = new mongoose.Schema({
    name:           String,
    location:       String,
    area:           String,
    rating:         Number
});

module.exports = mongoose.model("FireData", FireDataSchema);
