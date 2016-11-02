/* backend -----------------*/
var deliveryMethod;
var size;
var newPizza;

function Pizza (){
  this.deliveryMethod = deliveryMethod;
  this.size = size;
  this.toppings = [];
  this.cost = 10;
}


Pizza.prototype.deliveryCost = function () {
  if(this.deliveryMethod === "delivery"){
    this.cost += 5;
  }
}

Pizza.prototype.sizeCost = function () {
  if(this.size === "xl"){
    this.cost += 3
  } else if(this.size === "large"){
    this.cost += 2;
  } else if(this.size === "medium"){
    this.cost += 1;
  }
}

Pizza.prototype.toppingsCost = function () {
  var totalToppings = this.toppings.length;
  this.cost += totalToppings;
}


/* frontend -----------------*/
$(document).ready(function(){
  $("form#toppingsSize").submit(function(event){
    event.preventDefault();

    newPizza = new Pizza();



    $("input:checkbox[name=deliveryMethodInput]:checked").each(function(){
      deliveryMethod = $(this).val();
      newPizza.deliveryMethod = deliveryMethod;
    });

    $("input:checkbox[name=sizeInput]:checked").each(function(){
      size = $(this).val();
      newPizza.size = size;
    });

    $("input:checkbox[name=toppingInput]:checked").each(function(){
      var allToppings = $(this).val();
      newPizza.toppings.push(allToppings);
    });
    newPizza.deliveryCost();
    newPizza.sizeCost();
    newPizza.toppingsCost();
    $("form#toppingsSize").fadeOut(500);
    $("#orderSummary").fadeIn(2500);
    $("#checkoutButton").fadeIn(2500);


    $("#orderSummary").prepend("Your " + size + " pizza will hot and ready for " + deliveryMethod + " in 15 minutes, complete with:");

    for(var i = 0; i <= (newPizza.toppings.length - 1); i++){
      $("#toppingsList").append("<li>" + newPizza.toppings[i] + "</li>");
    }

    $("#orderSummary").append("<h2>Your total comes out to: $" + newPizza.cost);

  });
});
