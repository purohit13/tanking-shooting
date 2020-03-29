class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
  };

  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(0,0, this.width, this.height);

  };
};
