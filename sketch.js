var bg,form,system,code,security;
var treasure;
var score=0;
var database;
var clue;
var i = 1;

function preload() {
 
  
  bg= loadImage("Images/Image 6.jpg")
  //load image for the treasure background
  treasure = loadImage("treasure.jpg")

  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  security = new Security();
  system = new System();
  code = new Code();
  code.clues(i);
  
  
}

function draw() {
  background(bg);
  
 
  security.display();
  console.log(clue)
  
// add code for changing the background to the treasure background
   

  if(score === 3) {
    clear()
    background(treasure)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
  textSize(20);
  text("Score: " + score, 450, 50);
}