var express = require("express");
var router = express.Router();
var db = require("../models");

/*   show all data in the database */

router.get("/", function (req, res) {
  db.Product.find()
    .then(function (prod) {
      res.json(prod);
    })
    .catch(function (err) {
      console.log(err);
    });
});

/*
db.Product.create({
  productName: "blod tonic",
  price: 290,
  image: "https://images.unsplash.com/photo-1507774248527-378e90e918b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5447d2fe867149ad8bc53b05e78d9e17&auto=format&fit=crop&w=500&q=60"

});

*/
/* create new data in the database */

router.post("/", function (req, res) {
  db.Product.create(req.body)
    .then(function (prod) {
      res.json(prod);
    })
    .catch(function (err) {
      console.log(err);
    });
});


/*show one object in the data */

router.get("/:productId", function (req, res) {
  db.Product.findById(req.params.productId)
    .then(function (prod) {
      res.json(prod);
    })
    .catch(function (err) {
      console.log(err);
    });
});





/* update route */

router.put("/:productId", function (req, res) {
  db.Product.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true })
    .then(function (prod) {
      res.json(prod);
    })
    .catch(function (err) {
      res.send(err);
    });
});


/* the delete route */

router.delete("/:productId", function (req, res) {
  db.Product.remove({ _id: req.params.productId })
    .then(function () {
      res.json({ message: 'We deleted it!' });
    })
    .catch(function (err) {
      res.send(err);
    })

})


module.exports = router;