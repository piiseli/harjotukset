function laske(){
/*var basic = document.getElementById("type").options[0].text;
var premium = document.getElementById("type").options[1].text;
var gold = document.getElementById("type").options[1].text;
var platinum = document.getElementById("type").options[3].text;
var basic = 10;
var premium = 15;
var gold = 20;
var platinum = 25;*/
var x = document.getElementById("type").options[0].value;

document.getElementById("summa").innerHTML = "Hinta on: "+x +" €.";
document.getElementById("palaute").innerHTML = x;
}


