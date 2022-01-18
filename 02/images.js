//one specific image
document.write("<img src='3.jpg'><br>");
		
//random image
//var index = Math.round(Math.random() *2);
// Array of image file names
var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];
// Reference to the container for the images
const arrayImagesElement = document.getElementById("arrayImages");
for(var i = 0; i <= images.length; i++){
    document.write(images[i]);
  }

var index = images[Math.floor(Math.random() * (images.length))];//kertomerkin jälkeen mistä alueesta haetaan
//var index = images[Math.floor(Math.random() * 4)];
//document.write(images[index]);
//document.canvas.src(images[index]);
document.images[0].src = images[index];


/*var fruits = ["Omena", "Appelsiini", "Greippi", "Banaani"];
for(var i = 0; i <= fruits.length; i++){
    document.write(fruits[i]);
  }*/