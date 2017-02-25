/*  Livia Brown
    Last Edited on 2.25.17
    Visually shows data about how many times coffee is mentioned in each episode of Season 1 of Gilmore Girls. 
*/

var numCoffee = [12, 5, 4, 7, 4, 2, 5, 4, 2, 2, 3, 6, 2, 1, 5, 4, 2, 2, 7, 7, 1];
var lukesDiner = [4, 2, 3, 5, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 0, 3, 4, 1];
var gilmoreHome = [5, 2, 1, 2, 0, 0, 2, 2, 0, 1, 0, 2, 0, 0, 2, 2, 1, 0, 3, 2, 0]; 
var independenceInn = [3, 1, 0, 0, 3, 1, 2, 1, 0, 0, 1, 3, 1, 0, 1, 0, 0, 2, 1, 1, 0]; 
var mugWidth = 25;
var brewedCoffee = 17;
var index = 0;

function setup() {          
  createCanvas(950, 650); // Creates canvas at 950x650
}

function draw() {
  background(196, 126, 41);         // sets background ot an orange color
  drawEpisode();                    // calls drawEpisode function (numbers and text at top)
  drawCoffee();                     // calls drawCoffee function (numbers and text at bottom)
  coffeeCups();                     // calls drawCoffee function (numbers and text at bottom)
  if (mouseIsPressed) {             // this if statement is called if the mouse is being pressed
    locationsCoffeeMentioned();     // when mouse is pressed it shows which locations coffee is mentined
  } 
}

// This function creates the title and numbers + lists episode numbers.
// The for loop lists and spreads out the episode numbers with x, y coordinates.
// Text is styled to be white, with no stroke, size 14 font, calls open sans font, and bolds the text
function drawEpisode() {
  noStroke();
  fill(255);
  textSize(14);
  textFont("Open Sans");
  textStyle(BOLD);
  text("Season One Episodes", 400, 35);
  for (i = 0; i < 21; i++) {
    text(i + 1, 80 + i * 40, 72); 
  }
}

// This function creates the Coffee Cup # text and numbers lists numbers up to 12.
// The for loop lists and spreads out the coffee cup numbers.
// Text is styled to size 12 font and continues to carry the bold and Open Sans from the previous function
function drawCoffee() {
  textSize(12);
  text("Coffee", 5, 280);
  text("Cup", 10, 300)
  text("#", 15, 320);
  for (i = 0; i < 12; i++) {
    text (i + 1, 52, 100 + i * 40);
  }
}

// This function creates the coffee cups using an array in a nested for loop. 
// The outer loop creates cups across the x axis.
// The nested loop pulls the array and displays across the y axis. 
function coffeeCups() {
  for (i = 0; i < numCoffee.length; i++) {
    for(y = 0; y < numCoffee[i]; y = y + 1) {
      fill(255);
    	ellipse (i * 40 + 85, y * 40 + 95, mugWidth);
      fill(84, 57, 32);
      ellipse(i * 40 + 85, y * 40 + 95, brewedCoffee);
    }
  }
}

// This function creates the location colors and labels on the canvas.  
// There is a rectangle created with a stroke to create a border. There is no fill to the rect.
// Added no stroke for the text and colored them to match the ellipse colors. 
// The outer loop calls on lukesDiner variable and then the nested loop places it onto the previous coffee cup variable. 
// The nested loop displays the # of times coffee was mentioned at luke's diner in yellow. 
// I created a variable to call for the value of j and then called it in another for loop
// to replace the Gilmore home location after the lukesDiner location.
// The final calls the independenceInn variable and in the y location I call the variables that hold
// j and b to set the the indepenceInn varaiable below the gilmoreHome variable. 
function locationsCoffeeMentioned() {
  stroke(4);
  noFill();
  rect(250, 410, 380, 100);
  noStroke();
  fill(255);
  text("Locations Coffee is Mentioned", 350, 450);
  fill(245, 238, 44);
  text("Luke's Diner", 280, 480);
  fill(128, 215, 232);
  text("Gilmore House", 380, 480);
  fill(18, 36, 94);
  text("Independence Inn", 500, 480);
  for (i = 0; i < lukesDiner.length; i++) {
    for(j = 0; j < lukesDiner[i]; j = j + 1) {
      fill(245, 238, 44);
      ellipse(i * 40 + 85, j * 40 + 95, brewedCoffee);
    } 
  var prev = j;
    for(b = 0; b < gilmoreHome[i]; b = b + 1) {
      fill(128, 215, 232);
      ellipse(i * 40 + 85, prev * 40 + b * 40 + 95, brewedCoffee);
    }
    var previouslyB = b;
    for(k = 0; k < independenceInn[i]; k = k + 1) {
      fill(18, 36, 94);
      ellipse(i * 40 + 85, prev * 40 + previouslyB * 40 + k * 40 + 95, brewedCoffee);
    }
  }
}