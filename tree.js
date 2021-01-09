class tree{
    constructor(x,y){
        var options={
            stiffness:0.04,
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,10,10,options);
        this.image = loadImage('tree.png');
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 700, 700);
        pop();
    }
}