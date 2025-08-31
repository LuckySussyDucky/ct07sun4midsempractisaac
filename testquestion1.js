let ball;

function setup(){
    new Canvas(600, 400);
    world.gravity.y = 10;
}

function draw(){
    background(250)
    if(mouse.presses("left")){
        ball = new Sprite(mouse.x, mouse.y, 25, "dynamic")
    }
}
