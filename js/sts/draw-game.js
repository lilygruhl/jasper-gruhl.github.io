function drawGame(p) {
    //You can put your game/drawing code here. For a full reference of functions
    //see http://processingjs.org/reference/. You will need to always put processing. before the
    //function. Below is an example ellipse...
    p.ellipse(200,200,200,200);
    p.ellipse(200,200,100,100);
    p.// @pjs preload must be used to preload the image 

    p./* @pjs preload="laDefense.jpg"; */

    p.PImage b;

    p.b = loadImage("laDefense.jpg");

    p.image(b, 0, 0);
}
