/* backend -----------------*/












/* frontend -----------------*/
$(document).ready(function(){
  $("form#toppingsSize").submit(function(event){
    event.preventDefault();
    $("#orderSummary").show();

    $("input:checkbox[name=deliveryMethod]:checked").each(function(){
      var deliveryMethod = $(this).val();
      $("span#deliverySummary").append(deliveryMethod + " ");
    });

    $("input:checkbox[name=size]:checked").each(function(){
      var pizzaSize = $(this).val();
      $("span#sizeSummary").append(pizzaSize + "");
    });

    $("input:checkbox[name=topping]:checked").each(function(){
      var allToppings = $(this).val();
      $("span#toppingSummary").append(allToppings + ", ");
    });
  });
});
