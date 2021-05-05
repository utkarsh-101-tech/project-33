var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var turn = 5;

var divisionHeight=300;
var score =0;
var particle;
var gameState="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   division();
   plinkoSet();
   rand();
   
}
 


function draw() {
  background("black");

  push();
  textSize(20);
  fill("white");
  text("Score : "+score,20,30);
  text("Turns Left :"+turn,600,30);
  scoreLabel();
   pop();
   
  l1.display();
 

  Engine.update(engine);
 
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    }

   push(); 
  strokeWeight(7);
  stroke("yellow");
  line(0,550,800,550);
  pop();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
    }
    
 if(particle!=null)
   {
      particle.display();
   }
  
  
   scoring();

  if(turn==0){
    gameState="end";
    push();
    fill("white");
    textSize(75);
    text("GAME OVER",200,400);
    pop();
  }
  
}

//functions :-

function scoring(){
  if(particle!=null){
  pos=particle.body.position;
if(pos.y>550 ){

  if(pos.x>0 && pos.x<80){
   score= score+rand;
   particle=null;
  }
  else if(pos.x>10 && pos.x<80*2){
   score= score+rand1;
   particle=null;
  }
  else if(pos.x>80*2 && pos.x<80*3){
   score= score+rand2;
   particle=null;
  }
  else if(pos.x>80*3 && pos.x<180*4){
   score= score+rand3;
   particle=null;
  }
  else if(pos.x>80*4 && pos.x<80*5){
   score= score+rand4;
   particle=null;
  }
  else if(pos.x>80*5 && pos.x<80*6){
   score= score+rand5;
   particle=null;
  }
  else if(pos.x>80*6 && pos.x<80*7){
   score= score+rand6;
   particle=null;
  }
  else if(pos.x>80*7 && pos.x<80*8){
   score= score+rand7;
  particle=null;
  }
  else if(pos.x>80*8 && pos.x<80*9){
   score= score+rand8;
  particle=null;
  }
  else if(pos.x>80*8 && pos.x<80*9){
   score= score+rand9;
  particle=null;
  }
  else if(pos.x>80*9 && pos.x<800){
   score= score+rand10;
   particle=null;
  }
}
}
}

function mousePressed(){
if(gameState!=="end"){
 particle= new Particle(mouseX, 10, 10,10);
 turn= turn-1;
 particle.display();
 console.log(mouseX);
}
}

function scoreLabel(){
   text(rand,25,540);
   text(rand1,25+80,540);
   text(rand2,25+80+80,540);
   text(rand3,25+80+80+80,540);
   text(rand4,25+80+80+80+80,540);
   text(rand5,25+80+80+80+80+80,540);
   text(rand6,25+80+80+80+80+80+80,540);
   text(rand7,25+80+80+80+80+80+80+80,540);
   text(rand8,25+80+80+80+80+80+80+80+80,540);
   text(rand9,25+80+80+80+80+80+80+80+80+80,540);
}

function rand(){
   rand = 50*Math.round(random(1,10));
    rand1 = 50*Math.round(random(1,10));
    rand2 = 50*Math.round(random(1,10));
    rand3 = 50*Math.round(random(1,10));
    rand4 = 50*Math.round(random(1,10));
    rand5 = 50*Math.round(random(1,10));
    rand6 = 50*Math.round(random(1,10));
    rand7 = 50*Math.round(random(1,10));
    rand8 = 50*Math.round(random(1,10));
    rand9 = 50*Math.round(random(1,10));
}

function division(){
for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
   
    l1 = new Divisions(400,798,800,10)
}

function plinkoSet(){
for ( var k = 75; k<= width ; k= k+50){
     for(var j = 75; j<= 375 ; j= j+200 )
     plinkos.push( new Plinko(k,j));
   }

   for ( var k = 50 ; k<= width-10 ; k= k+50){
      for(var j = 175; j<= 470 ; j= j+200 )
     plinkos.push( new Plinko(k,j));
   }
}