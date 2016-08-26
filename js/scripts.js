// Business Logic
function Order (pizzas, totalPrice) {
  this.pizzas = [];
  this.totalPrice = totalPrice;
}

function Pizza(size, quantity, toppings, price) {
  this.size = size;
  this.quantity = quantity
  this.toppings = [];
  this.price = price;
}

Pizza.prototype.createPrice = function() {
  if (this.size === "Small") {
    this.price = this.quantity*(10+(this.toppings.length*2));
  } else if (this.size === "Medium") {
    this.price = this.quantity*(12+(this.toppings.length*2));
  } else if (this.size === "Large") {
    this.price = this.quantity*(14+(this.toppings.length*2));
  } else {
    this.price = this.quantity*(16+(this.toppings.length*2));
  }
  return this.price;
}

// UI Logic
function resetFields() {
  $("#size").val("Small");
  $("#quantity").val("1");
  $(".reset-check").each(function() {
    $(this).prop("checked", false)
  });
  $(".btn").mouseup(function(){
    $(this).blur();
  });
}

$(document).ready(function() {
  var newOrder = new Order();
  $("#cart").click(function() {
    var size = $("#size").val();
    var quantity = parseInt($("#quantity").val());
    var newPizza = new Pizza(size, quantity);
    $("input:checkbox[name=toppings]:checked").each(function() {
      newPizza.toppings.push($(this).val());
    });
    newPizza.price = newPizza.createPrice();
    newOrder.pizzas.push(newPizza);
    $("#display-order").append("<p><strong>" + newPizza.quantity + " X " + newPizza.size + " Pizzas</strong></p>");
    resetFields();
  });

  $("form").submit(function(event) {
    event.preventDefault();

  });
});
