class Box {
    constructor(x,y){
        var Box_options = {
            'friction': 1,
            'isStatic': false,
            'density' : 5
        };
        this.body = Bodies.rectangle(x,y,90,90,Box_options)
        this.x = x;
        this.y = y;
        World.add(world,this.body)

    };
    display(){
        var Boxpos = this.body.position;
        push();
        rectMode(CENTER);
        fill("black");
        stroke("white");
        rect(Boxpos.x,Boxpos.y,90,90);
        pop();
        
    }
}