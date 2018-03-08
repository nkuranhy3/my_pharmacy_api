var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var productsRoutes = require("./routes/products");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.json({ message: 'this is a fom home page json app' });
});


app.use("/api/products", productsRoutes);






app.listen(port, process.env.IP, function () {
    console.log("APP IS RUNNING ON PORT " + port);
});