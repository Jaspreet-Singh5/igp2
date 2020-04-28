var mongoose = require("mongoose");

var BeneficationDataSchema = new mongoose.Schema({
    name:               String,
    location:           String,
    product:            String,
    contact:            String,
    type:               String
});

module.exports = mongoose.model("BeneficationData", BeneficationDataSchema);
