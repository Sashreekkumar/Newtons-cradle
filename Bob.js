class Bob {
    constructor(x,y,r){
        var options={
            isStatic: false,
            //frictionAir': 0.01,
            'density': 0.8,
            'friction': 0,
            'restitution': 1
      
          }
          this.x= x
          this.y= y
          this.r=r
          this.body = Bodies.circle(this.x, this.y, this.r, options);
          World.add(world, this.body);
    }
    
    display(){
        push()
    translate(this.body.position.x, this.body.position.y)
    fill("red")
    ellipseMode(RADIUS)
    ellipse(0,0, this.r, this.r)
    pop()
    }
    }


