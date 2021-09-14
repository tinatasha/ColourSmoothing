let red;
let green;
let blue;
let orange;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
   background(255);
  noLoop();
}

function draw() {
  
  for(let i = 0; i < width; i+=20){
    for(let y = 0; y < height; y += 10){
      red = 255;
  green = (sin(i/100)+1)*127.5;
  blue = (sin(y/100)+1)*127.5;
    
    fill(red, green, blue)
    noStroke()
    rect(i, y, 20, 20)
    }
  }
}