const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var Drops = [];

var bgImg;
var engine, world;
function preload(){
  bgImg = loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  if(frameCount%150 === 0){
    for (var i = 0; i<maxDrops; i++){
      Drops.push(new Snow(random(0,800),random(0,400)));
    }
  }
}

function draw() {
  Engine.update(engine);
  background(bgImg);  
  for(var i = 0;  i<maxDrops; i++){
    Drops[i].showSnow();
    Drops[i].updateY();
  }
}