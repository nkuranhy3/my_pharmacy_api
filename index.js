var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var productsRoutes = require("./routes/products");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function (req, res) {
    res.sendFile("index.html");
});


app.use("/api/products", productsRoutes);






app.listen(port, process.env.IP, function () {
    console.log("APP IS RUNNING ON PORT " + port);
});