function Snake() {
  this.x = 0; // tracks position on x-axis
  this.y = 0; // tracks position on y-axis
  this.xspeed = 1; // speed along x-axis
  this.yspeed = 0; // speed along y-axis
  this.total = 0; // tracks snake's length
  this.tail = []; // tracks tail's location - tail being everything behind head
  this.lastKeyPressed = "right"; // tracks last key pressed so snake cannot reverse direction

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  // Implements death conditions of snake
  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);

      if (d < 1) {
        // Resets snake to starting size
        this.total = 0;
        this.tail = [];
        // Resets snake to starting position
        this.x = 0;
        this.y = 0;
      }
    }
  }

  // Updates game to move snake around
  this.update = function() {
    for (var i = 0; i < this.tail.length-1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    if (this.total >= 1) {
      this.tail[this.total-1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * grid;
    this.y = this.y + this.yspeed * grid;

    // Prevents snake from wandering off the grid
    this.x = constrain(this.x, 0, width - grid);
    this.y = constrain(this.y, 0, height - grid);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, grid, grid);
    }
    rect(this.x, this.y, grid, grid);
  }
}
