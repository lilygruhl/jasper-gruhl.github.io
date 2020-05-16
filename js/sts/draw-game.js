function drawGame(p) {
    //You can put your game/drawing code here. For a full reference of functions
    //see http://processingjs.org/reference/. You will need to always put processing. before the
    //function. Below is an example ellipse...
    p.ellipse(200,200,200,200);
    p.ellipse(200,200,100,100);

    var b = loadImage("https://previews.123rf.com/images/bdcollins/bdcollins1402/bdcollins140200370/26337001-deli-ham-slices.jpg");
    p.image(b, 0, 0);
}
