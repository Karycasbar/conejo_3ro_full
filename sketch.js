const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;
var ground; 
var rope;
var fruit;
var fruit_con;
var bg_img, food, rabbit;
var bunny;
var button;
var blink, eat, sad;
function preload(){
  bg_img = loadImage("background.png");
  food = loadImage("melon.png");
  rabbit = loadImage("eat_0.png");
  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");
}
function setup(){ 
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  //boton 1
  button = createImg("cut_btn.png");
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);
   
  bunny = createSprite(200,620,100,100);
  bunny.addImage(rabbit);
  bunny.scale = 0.2;
  ground = new Ground(200,690,600,20); 
  rope = new Rope(6,{x:245, y:30});
  var fruit_options={
    density: 0.001
  }
  fruit = Bodies.circle(300,300,15,fruit_options);
  Matter.Composite.add(rope.body,fruit);
  fruit_con = new Link(rope, fruit);
  imageMode(CENTER);
}
function draw(){ 
  background(51);
  image(bg_img, width/2, height/2, 490,690);
  ground.show();
  rope.show();
  image(food,fruit.position.x, fruit.position.y, 70,70);//envoltura, para la fruta
  Engine.update(engine); 
  drawSprites();  
}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = null;
}




