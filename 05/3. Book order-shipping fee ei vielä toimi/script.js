function calculate(){
var quantity = parseInt(document.getElementById("quantity").value, 10);
var price = parseFloat(document.getElementById("price").value, 10);
var tax = parseFloat(document.getElementById("tax").value, 10);
var discount = parseFloat(document.getElementById("discount").value, 10);
var total = quantity * price + tax;
var discountSum = total * discount/100;
var alennettuHinta = total - discountSum;
var discountExtra = 2* discountSum;
if(quantity >= 100){
  document.getElementById("total").value = total - discountExtra;
}
else {
document.getElementById("total").value = alennettuHinta;
}
var summa = parseFloat(document.getElementById("total").value, 10);
var shipping = parseFloat(document.getElementById("shipping").value, 10);
  document.getElementById("shipping").value = shipping;
return summa;
}
document.write(summa);
function ship(){
  var shipping = parseFloat(document.getElementById("shipping").value, 10);
  document.getElementById("shipping").value = shipping;
}
