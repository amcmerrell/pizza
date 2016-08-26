// Business Logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
}

// UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var size = $("#size").val();
    var newPizza = new Pizza(size)
    $("input:checkbox[name=toppings]:checked").each(function() {
      newPizza.toppings.push($(this).val());
    });
    console.log(newPizza);
  });
});
