class stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:0.7
        }
        this.body=Bodies.circle(x,y,r/2,options);
        this.r=r;
        this.image=loadImage("images/stone.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
}