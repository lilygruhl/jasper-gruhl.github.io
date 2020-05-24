let hamImage;
let breadImage;
let pickleImage;
let lettuceImage;
let y = 0;

function preload() {
    hamImage = loadImage("images/ham.jpg");
    breadImage = loadImage("images/dutch-crunch.png");
    pickleImage = loadImage("images/pickle.png");
    lettuceImage = loadImage("images/lettuce.png");
    for (i = 0; i < 10000000; i++) {
        //
    }
}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(255,255,255);
    y = y+1;
    noStroke();
    image(hamImage,0, y, 70, 70);

}

function mousePressed() {
    y = 0;
}
