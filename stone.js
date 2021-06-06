class Stone {
    constructor(x,y){
        var stone_options = {
            'friction': 5,
            'isStatic': false,
            'density' : 100
        };
        this.body = Bodies.rectangle(x,y,90,90,stone_options)
        this.x = x;
        this.y = y;
        World.add(world,this.body)

    };
    display(){
        var Stonepos = this.body.position;
        push();
        rectMode(CENTER);
        fill("red");
        stroke("white");
        rect(Stonepos.x,Stonepos.y,40,70);
        pop();
        
    }
}