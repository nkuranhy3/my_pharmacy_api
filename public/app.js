/* global $  */

$(document).ready(function () {
  $.getJSON("/api/products")
    .then(addProducts)
    .catch(function (err) {
      alert(err);
    });
});

function addProducts(products) {
  products.forEach(function (product) {
    var productName = $("<li>" + product.productName + "</li>");
    var p = $("<span>" + product.price + "</span>");
    $(".list").append(productName);
    $(".pee").append(p);
  });
}
