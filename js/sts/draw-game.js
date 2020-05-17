//called once at the start
function setup(p) {
    p.background(255,255,255);
}

//Called 10 times per second
function drawGame(p) {
    y = y+1
    p.noStroke();
    p.image(pickleImage,400,y,70,70);
}
