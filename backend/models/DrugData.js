var mongoose = require("mongoose");

var DrugDataSchema = new mongoose.Schema({
    name:           String,
    area:           String,
    rating:         Number
});

module.exports = mongoose.model("DrugData", DrugDataSchema);
