
let hamImage;
let breadImage;
let pickleImage;
let lettuceImage;
let y = 0;
let speed = 3;
let plateX = 100
let plateXSpeed=15
function preload() {
    hamImage = loadImage("images/ham.jpg");
    breadImage = loadImage("images/dutch-crunch.png");
    pickleImage = loadImage("images/pickle.png");
    lettuceImage = loadImage("images/lettuce.png");
    plateImage = loadImage("images/plate.jpg");

}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(255,255,255);
    if(y<600){
    drawPlate(plateX, 500, 200, 200)
    image(hamImage,0, y, 70, 70);
    image(lettuceImage, 200, y, 70, 70);    
    }
    y = y + speed;
    
    
}

function drawPlate(x, y, w, h) {
 image(plateImage, x, y, w, h);
}
function keyPressed() {
  if (keyCode === 74) {
    plateX = plateX - plateXSpeed;
  } else if (keyCode === 76) {
    plateX = plateX + plateXSpeed;
  }
}

function mousePressed() {
    y = 90;
}
