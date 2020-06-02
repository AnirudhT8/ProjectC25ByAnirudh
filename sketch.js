const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper, paperimg;
var ground, binimg;

var bin;

function preload(){
	binimg = loadImage("bin.png");
//	paperimg = loadImage("Sprites/paper.img");
}
	


function setup() {
	createCanvas(1900, 1500);


	engine = Engine.create();

	world = engine.world;


	paper = new Paper();
	ground = new Ground();
	
    binBody1 = new DustbinBody(530,400,20,170);
    binBody2 = new DustbinBody2(600,495,130,15);
    binBody3 = new DustbinBody(670,400,20,170);
	
	Engine.run(engine);	
	box2  =  createSprite(600,400,100,100);
	box2.addImage(binimg);
	box2.scale = 0.5;
	
   
  
}




function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  paper.display();
binBody1.display();
binBody2.display();
binBody3.display();


 drawSprites();
}

function keyPressed(){

	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-54})

	}

}

