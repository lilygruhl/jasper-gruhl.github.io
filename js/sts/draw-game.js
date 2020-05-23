//called once at the start
function setup() {
    y = 0
    background(255,255,255);
    hamImage = loadImage("images/ham.jpg");
    breadImage = loadImage("images/dutch-crunch.png");
    pickleImage = loadImage("images/pickle.png");
    lettuceImage = loadImage("images/lettuce.png");

}

//Called 10 times per second
function draw() {
    y = y+1
    noStroke();
    image(pickleImage,400,y,70,70);
}
