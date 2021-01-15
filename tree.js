class tree {
    constructor(x,y,width,height){
    var options = {
        isStatic :true,
        restitution: 0,
        friction:1,
        density:1.2

    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y ,this.width,this.height, options);
    this.image = loadImage("images/tree.png");
    World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    scale(1.1)
    image(this.image,0,0,400,400)
    pop()
    };
};