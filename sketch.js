var wall,thickness;
var speed1,weight1;
//var Car=[];
var bullet1,bullet2;
var edges;

function setup() {
  createCanvas(1600,400);
  
  speed1=Math.round(random(223,321))
weight1=Math.round(random(30,52))

  thickness=Math.round(random(23,83));
 bullet2 = new bullet(100,50,weight1,speed1);
  bullet1 = new bullet(200,100,weight1,speed1);

  wall=createSprite(1200,200,thickness,400);
edges = createEdgeSprites();
}

function draw() {
  background("black"); 
  bullet1.display();
  bullet2.display();
  if(isTouching(wall,bullet)){
    bullet.velocityX=0;
    bullet.collide(wall);
    var damage=0.5*this.weight*this.speed*this.speed/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor=color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor=color(0,255,0);
    }
  }
}

