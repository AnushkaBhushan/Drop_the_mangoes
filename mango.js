class mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            //density:1.2
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = radius;
        this.image = loadImage('mango.png');
        World.add(world,this.body);
        this.r = radius/2;
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}