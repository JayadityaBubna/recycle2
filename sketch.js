
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbinbase;
var dustbinright;
var dustbinleft;
var ground;


function preload(){

}

function setup() {
	createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

	paper=new Paper(150,360);

	dustbinbase=new Dustbin(600,650,120,140);
	dustbinleft=new Dustbin(540,615,80,20);
	dustbinright=new Dustbin(660,615,80,20);

	ground=new Ground(400,670);

	
    

	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  rectMode(CENTER);
  
  paper.display();
  
  dustbinleft.display();
  dustbinright.display();
  dustbinbase.display();

  paper.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  
   Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10},);

  }
}

