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
}

function setup() {

    background(255,255,255);
    createCanvas(1000, 1000);
}

//Called 10 times per second
function draw() {
    y = y+1;
    noStroke();
    image(hamImage,0, y, 70, 70);

}
