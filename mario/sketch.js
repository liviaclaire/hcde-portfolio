  /*  Livia Brown
      Last Edited on 2.11.17
      Creates a mario scene with mario jumping to box and having a coin pop out
  */
var marioB;         // creates variable for mario image
var song;           // creates variable for song
var dir = 5;        // creates variable for speed 
var y = 400;        // creates variable for y coordinate and sets it at 400
var x = 230;        // creates variable for x coordinate and sets it at 230
var coinX = 500;    // creates variable for x coordinate and sets it at 500
var coinY = 280;    // creates variable for y coordinate and sets it at 280

function preload() {                  // creates function that preloads image before setup and draw run
  marioB = loadImage("mario.jpg");    // variable marioB = the mario image that is loaded as the background
}

function setup() {
  createCanvas(840, 525);                       // creates canvas at 840x525
  image(marioB, 0);                             // puts image onto canvas by using marioB variable
  song = loadSound("supermario.mp3", loaded);   // connects song variable to loaded mario music
  noStroke();                                   // no shapes will have a stroke
}

function loaded () {                            // loads mario music and starts playing after canvas appears
  song.loop();                                  // plays mario music on an infinite loop
}

function draw() {
  background(marioB);                     // repeats mario image background
  mario();                                // calls mario function
  if (keyCode == LEFT_ARROW) {            // creates if statement says if left arrow is pressed
    x = max(x - dir, 50);                 // then the direction will go left on the x axis and stop at 50
  } else if (keyCode == RIGHT_ARROW) {    // otherwise if the right arrow is pressed 
    x = min(x + dir, 800);                // mario will move to the right until 800 on x axis  
  }
  if (keyCode == UP_ARROW) {              // if the up arrow is pressed
    y = max(y - dir, 370);                // mario will go up until y coordinate is at 370
  } else {                                // otherwise
    y = min(y + dir, 400);                // he will go back down and stop when y coordinate is at 400
  }
  if (keyCode == UP_ARROW && x > 400 && x < 700)  {   // if the up arrow goes between 400 and 700 on x axis
    coin();                                           // the coin function will appear
    coinY = coinY - dir;                              // then the coin will move up and off the canvas
  }
}

  // Creates Mario character
function mario() {
  fill(237, 207, 181); 
  ellipse(x, y, 40, 30);
  
  fill(198, 31, 41);
  ellipse(x, y - 15, 35, 10);
  rect(x + 5, y - 15, 20, 5);
  ellipse(x, y + 40, 30, 50)

  fill(100, 70, 44); 
  rect(x - 10, y + 65, 15, 5);
  rect(x - 5, y + 65, 15, 5);

  fill(0, 76, 163); 
  ellipse(x, y + 50, 30, 30);
  rect(x - 2, y + 15, 5, 20);
  
  fill(0); 
  rect(x + 10, y - 5, 5, 5);
  
  fill(248, 234, 3); 
  rect(x + 5, y + 43, 5, 5);
}

  // creates coin
function coin() {
  fill(242, 226, 104);
  ellipse(coinX, coinY, 30, 30);
  fill(235, 199, 42);
  ellipse(coinX, coinY, 20, 20);
  fill(0);
  rect(coinX - 2, coinY - 5, 5, 10);
  rotate(10);
}
