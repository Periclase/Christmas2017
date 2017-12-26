var snowflakes = [];
var yFloor = 0;
var count = 0;
var framez;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //for (var i = 0; i < 500; i++) {
  //snowflakes.push(new Snowflake());
  //}
}

function draw() {
  background(6, 29, 66);
  fill(255);
  if (count == 20) {
    framez = round(frameRate());
    count = 0;
  }
  count++;
  text("Frame Rate: " + framez, 10, 30);
  text("Flake #: " + snowflakes.length, 10, 10);
  rect(0, height - yFloor, width, yFloor);
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].move();
    snowflakes[i].display();
    if (snowflakes[i].life > 40) {
      snowflakes.splice(i, 1);
    }
  }
  s = new Snowflake();
  s.y = -1;
  snowflakes.push(s);
  yFloor += 0.005;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Snowflake() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(1, 5);
  this.speed = 0.5;
  this.life = 0;

  this.move = function() {
    if (this.y < height - yFloor) {
      //this.y = 0;
      this.y++;
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    } else {
      this.life += 0.1;
    }

  };

  this.display = function() {
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
