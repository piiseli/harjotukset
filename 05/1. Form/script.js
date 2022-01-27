let testi="OK tai Cancel jälkeen tähän pitäis tulla tekstii, vaan ei tuu, selvitä, mistä johtuu!!"
document.getElementById("testi").innerHTML = testi;
function validateForm() {

    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["comment"].value;
      if (y == "") {
        alert("Comment must be filled out");
        return false;
    }
    let text;
    if(confirm("Meiliosoitteesi on: "+x+"\nKommenttisi: "+y+"\nHaluatko varmasti lähettää?")){
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    document.getElementById("teksti").innerHTML = text;   
}