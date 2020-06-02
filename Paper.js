

class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0, 
            friction:0,
            density:1,

            
        }
        this.body=Bodies.circle(100,200,20,options);
        this.image = loadImage("paper.png");  
        
        World.add(world,this.body);
        World.add(world, this.body);
    }
    display(){
        var p = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,p.x,p.y,33,33);
    
}
}