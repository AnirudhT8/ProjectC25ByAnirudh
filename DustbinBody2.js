class DustbinBody2{
    constructor(x,y,width,height){
/*        var options ={
            isStatic: true
      }
    
*/
this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("yellow");
   // noStroke();
    rect(pos.x,pos.y,this.width,this.height);
}
}