var thunder, man; 
function preload() { 


loadImage("images/1.png"); 
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}