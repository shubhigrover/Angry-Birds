const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint

var engine, world;
var box1, pig1;
var bgImg
var sling


function preload(){
gettime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform= new Ground(100,350,275,275)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,60);

    //log6= new Log(200,350,80,PI/2)
    sling= new slingshot(bird.body,{x:220,y:60})

}

async function gettime (){
    var response=  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var resJSON= await response.json()
    var datentime= resJSON.datetime
    var hour= datentime.slice(11,13) 
    console.log(hour)

    if(hour>=05 && hour<=17){
        bg="sprites/bg.png"
    }
    else{
        bg="sprites/bg2.jpg"
    }
    bgImg=loadImage(bg)
}


function draw(){
    if(bgImg){
    background(bgImg);
    } 
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    //log6.display()
    bird.display();
    sling.display()
    platform.display()

    fill("black")
    textSize(25)
    text("Press space for second try",500,50)

    
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
sling.fly()
}

function keyPressed() {
    if(keyCode===32){
        sling.attach(bird.body)
    }
}