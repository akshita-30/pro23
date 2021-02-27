class Box{
    constructor(x,y,width,height){
        var options ={
            restitution:0.8
        }
        this.body = Bodies.Rectangle(x,y,width,height);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        rectMode(center);
        fill(255);
        rect(pos.x,pos.y,this.height,this.width);
    }
}