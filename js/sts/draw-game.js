function drawGame(p) {
    //You can put your game/drawing code here. For a full reference of functions
    //see http://processingjs.org/reference/. You will need to always put processing. before the
    //function. Below is an example ellipse...
    p.ellipse(560, 460, 550, 350);
    p.fill(400,20,200);
    p.text("Hi my name is Lilyyy!",25,73);
   
    b = p.loadImage("https://previews.123rf.com/images/bdcollins/bdcollins1402/bdcollins140200370/26337001-deli-ham-slices.jpg");
    p.image(b, 0, 0);
}
