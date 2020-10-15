class Ground{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,800,20,{isStatic:true});
        this.width=800;
        this.height=20;

        World.add(world,this.body);
    }
    display(){
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,800,20);



    }
 
}