class stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.image = loadImage('stone.png');
        World.add(world,this.body);
        this.r = 20;
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,80,80);
        pop();
    }
}