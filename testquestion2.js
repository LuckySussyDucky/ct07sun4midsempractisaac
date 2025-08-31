let ball;
let floor;

function setup(){
    new Canvas(600, 400);
    world.gravity.y = 10;
    floor = new Sprite(300, 400, 600, 30, "static");
    floor.color = "red";
}

function draw(){
    background(250)
    if(mouse.presses("left") || mouse.presses("right")){
        ball = new Sprite(mouse.x, mouse.y, 25, "dynamic")
        ball.bounciness = 0.5;
    }
}

