class Box{
    constructor(x,y,width,height){
       var options={
         
           'restitution':0.1,
            'friction':1.0,
            'density':0.2
       }
       this.width=width
       this.height=height
       this.body=Matter.Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
    }
    display(){
        push ()
        var angle = this.body.angle;
        var pos=this.body.position
        rotate(angle);
        rectMode(CENTER)
        fill ("lightgreen")
        rect(pos.x,pos.y,this.width,this.height)
        pop ()
    }
}