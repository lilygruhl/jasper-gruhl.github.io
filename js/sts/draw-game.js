
let hamImage;
let breadImage;
let pickleImage;
let lettuceImage;
let y = 0;
let speed = 5;

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
    if(y>475){
        return;
    }
    background(255,255,255);
    y = y + speed;
    image(hamImage,0, y, 70, 70);
    image(lettuceImage, 200, y, 70, 70);
    drawPlate(100, 500, 100, 100)
}

function drawPlate(x, y, w, h) {
 image(plateImage, x, y, w, h);
}

function mousePressed() {
    y = 90;
}
