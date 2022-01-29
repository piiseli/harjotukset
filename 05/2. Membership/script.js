function laske(){
/*var basic = document.getElementById("type").options[0].text;
var premium = document.getElementById("type").options[1].text;
var gold = document.getElementById("type").options[1].text;
var platinum = document.getElementById("type").options[3].text;
var basic = 10;
var premium = 15;
var gold = 20;
var platinum = 25;*/
var x = document.getElementById("type").value;
var years= document.getElementById("years").value;
var hinta = x * years;
var alennettu = hinta*0.8;
var bonus = alennettu - 5;
if(years>=5){
  alert("Saat 20% alennuksen lisäksi ylimääräisen 5€ bonuksen!");
document.getElementById("summa").innerHTML = "Hinta on: "+ bonus +" €.";
}
else if(years > 2){
  alert("Saat 20% alennuksen!");
document.getElementById("summa").innerHTML = "Hinta on: "+ alennettu +" €.";
}
else {
  document.getElementById("summa").innerHTML = "Hinta on: "+ hinta+" €.";
}
}


