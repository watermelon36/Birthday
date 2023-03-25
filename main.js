function preload(){

}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(600, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
    fill('#2FFFF2')
    rect(0, 55, 55, 293);
    rect(55,0,390,55)
    rect(55,345,390,55)
    rect(445, 55, 55, 293);
    fill('#75FFAC')
    circle(25, 28, 50);
    fill('#75FFAC')
    circle(25, 375, 50);
    circle(473,375,52)
    circle(473,27,52)
}

function take_pic(){
    save('Birthday_Pic.png');
}