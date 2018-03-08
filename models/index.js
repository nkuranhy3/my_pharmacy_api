var mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/pharmacy_api");

mongoose.Promise = Promise;

module.exports.Product = require("./products");