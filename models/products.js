/********************  schema ******************************/


var mongoose = require("mongoose");

var productShema = new mongoose.Schema({
  productName: {
    type: String,
    required: "Name cannot be empty"
  },
  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05aac1c5af5788e1dc29e2a75a2e458e&auto=format&fit=crop&w=500&q=60"
  },
  price: {
    type: Number,
    default: 10
  },

  inStock: {
    type: Boolean,
    default: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

var Product = mongoose.model("Product", productShema);

module.exports = Product;
