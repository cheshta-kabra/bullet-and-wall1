class bullet{
    constructor(x,y,weight, speed){
        this.weight=weight;
        this.speed=speed;
        this.velocityX=this.speed;
        this.width=35;
        this.heigth=5;
        this.x = x;
        this.y = y;
        this.bullet = createSprite(this.x,this.y,this.width,this.height);
        this.bullet.velocityX = this.speed;
        this.bullet.shapeColor = "white";
    }

display() {
    
    drawSprites();
}
isTouching(wall,bullet){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge){
        return true;
    }
    else{
        return false;
    }
  }
}

