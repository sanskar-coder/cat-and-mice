var canvas;
var music;
var ball;
var plat1;
var plat2;
var plat3;
var plat4;
var wall1;
var wall2;
var wall3;
var wall4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    plat1 = createSprite(700,580,170,20);
    plat1.shapeColor = "green";

    plat2 = createSprite(500,580,170,20);
    plat2.shapeColor = "red";

    plat3 = createSprite(300,580,170,20);
    plat3.shapeColor = "yellow";

    plat4 = createSprite(100,580,170,20);
    plat4.shapeColor = "blue";

    //create box sprite and give velocity
    ball = createSprite(400,100,30,30);
    ball.x =(random(20,750));
    ball.velocityY = 5;
    ball.velocityX = 5;

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

//add condition to check if box touching surface and make it bounce
if(ball.isTouching(plat1) && ball.bounceOff(plat1)) {
    ball.shapeColor = "green";
    music.loop();
}

if(ball.isTouching(plat2) && ball.bounceOff(plat2)){
    ball.shapeColor = "red";
    music.stop();
    ball.velocityY = 0;
    ball.velocityX = 0;
}

if(ball.isTouching(plat3) && ball.bounceOff(plat3)){
    ball.shapeColor = "yellow";
    music.loop();
}

if(ball.isTouching(plat4) && ball.bounceOff(plat4)){
    ball.shapeColor = "blue";
    music.stop();
    ball.velocityY = 0;
    ball.velocityX = 0;
}

} 
    

