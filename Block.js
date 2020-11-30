class Block {
  constructor(x, y, radius) {
    var options = {
      friction: 1,
      density: 1,
      restitution: 1,
    };
    this.body = Bodies.rectangle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    fill("white");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.radius);
  }
}
