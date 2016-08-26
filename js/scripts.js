// Business Logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = price;
}

Pizza.prototype.createPrice = function() {
  if (this.size === "Small") {
    this.price = 10+(this.toppings.length*2);
  } else if (this.size === "Medium") {
    this.price = 12+(this.toppings.length*2);
  } else if (this.size === "Large") {
    this.price = 14+(this.toppings.length*2);
  } else {
    this.price = 16+(this.toppings.length*2);
  }
  return this.price;
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
    console.log(newPizza.createPrice());

  });
});
