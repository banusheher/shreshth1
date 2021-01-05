class Bob {
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.8,
            friction: 0,
            density: 1.0
        }
        this.body = Bodies.circle(x,y,25,options);
        this.Diameter = 50;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,50,50);
        pop();
    }
}