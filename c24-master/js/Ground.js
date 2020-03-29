class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(0,10,width,height,options);
    this.y = 390;
    this.width = 1700;
    this.height = height;
    World.add(world, this.body);
  };

  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(0,0, this.width, this.height);

  }
}
