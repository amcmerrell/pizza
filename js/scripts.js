// Business Logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
}

// Pizza.prototype.addToppings = function() {
//   for (var topping = 0; i < toppings.length; topping++) {
//     this.toppings.push(topping)
//   }
// }

// UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var size = $("#size").val();
    
  });
});
