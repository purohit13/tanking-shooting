class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 50;
    this.height = 40;
    World.add(world, this.body);
    };

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(0,0, this.width, this.height);
  

    };
}
