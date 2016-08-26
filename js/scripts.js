// Business Logic
function Order (pizzas, totalPrice) {
  this.pizzas = [];
  this.totalPrice = totalPrice;
}

function Pizza(size, toppings, price) {
  this.size = size;
  this.qua
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
function resetFields() {
  $("#size").val("Small");
  $(".btn").mouseup(function(){
    $(this).blur();
  });
  $(".reset-check").each(function() {
    $(this).prop("checked", false)
  });
}

$(document).ready(function() {
  var newOrder = new Order();
  $("#cart").click(function() {
    var size = $("#size").val();
    var newPizza = new Pizza(size)
    $("input:checkbox[name=toppings]:checked").each(function() {
      newPizza.toppings.push($(this).val());
    });
    newPizza.price = newPizza.createPrice();
    newOrder.pizzas.push(newPizza);
    console.log(newOrder);
    resetFields();
  });

  $("form").submit(function(event) {
    event.preventDefault();


  });
});
