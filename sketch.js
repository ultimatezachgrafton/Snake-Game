// Zach Grafton
// Classic Snake Game programming challenge

var snake;
//var canvas = getContext('2d');
var grid = 20; // scale of grid
var food;

function setup() {
  createCanvas(300, 300); // creates canvas
  snake = new Snake(); // dynamically creates snake
  frameRate(7); // adjusts framerate for a classic old-school look
  pickLocation(); // picks location for food
}

function pickLocation() {
  var cols = floor(width/grid);
  var rows = floor(height/grid);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(grid);
}

function draw() {
  background(30);

  if (snake.eat(food)) {
    pickLocation();
  }

  snake.death();
  snake.update();
  snake.show();

  fill(255, 0, 100);
  rect(food.x, food.y, grid, grid);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (snake.lastKeyPressed !== "down") {
      snake.lastKeyPressed = "up";
      snake.dir(0, -1);
    }
  } else if (keyCode === DOWN_ARROW) {
    if (snake.lastKeyPressed !== "up") {
      snake.lastKeyPressed = "down";
      snake.dir(0, 1);
    }
  } else if (keyCode === LEFT_ARROW) {
    if (snake.lastKeyPressed !== "right") {
      snake.lastKeyPressed = "left";
      snake.dir(-1, 0);
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (snake.lastKeyPressed !== "left") {
      snake.lastKeyPressed = "right";
      snake.dir(1, 0);
    }
  }
}
