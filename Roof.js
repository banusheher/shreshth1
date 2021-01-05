class Roof{
    constructor(){
      var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(600,150,350,20,options);
        this.width=350;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
