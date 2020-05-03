class Ground{
    constructor(){
        var options= {
            isStatic: true
        }
        this.body=Bodies.rectangle(200,380,400,40,options);
        World.add(world,this.body)

    }
    display(){
        var G= this.body.position
        rectMode(CENTER);
        fill("red")
        rect(G.x,G.y, 400,40);
    }
}