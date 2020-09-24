var player;
var lava;
var ground, ground2, groun3, ground4, ground5, ground6, ground7, ground8;
var ground9,
  ground10,
  ground11,
  ground12,
  ground13,
  ground14,
  ground15,
  ground16;
var gameState = "start";
var playAgain;
var trap, dart;

function setup() {
  createCanvas(displayWidth, displayHeight - 140);
  player = createSprite(100, 350, 20, 50);
  ground = createSprite(200, 370, 800, 20);
  ground2 = createSprite(1250, 370, 800, 20);
  dart = createSprite(800, 330, 10, 4);
  dart.shapeColor = "green";
  trap = createSprite(800, 330, 50, 50);
  playAgain = createSprite(player.x + 160, 150, 100, 50);

  lava = createSprite(displayWidth / 2, 750, 3200, 240);
  lava.shapeColor = "orange";
}

function draw() {
  background(255, 255, 255);
  camera.position.x = player.x + 300;
  trap.setCollider("rectangle", -300, 0, 500, 100);

  player.velocityY = player.velocityY + 0.5;
  player.collide(ground);
  player.collide(ground2);
  lava.x = player.x + 160;

  if (gameState === "start") {
    playAgain.visible = false;

    if (keyDown("Right_ARROW")) {
      player.velocityX = 9;
    }
    if (keyDown("Left_ARROW")) {
      player.velocityX = -9;
    }
    if (keyWentDown("space") && player.y >= 330 && player.y <= 340) {
      player.velocityY = -9;
    }
    if (player.isTouching(lava)) {
      gameState = "end";
    }

    if (player.isTouching(trap)) {
      dart.velocityX = -15;
    }
    if (dart.x < player.x - 600) {
      dart.x = 800;
      dart.velocityX = 0;
    }
    if (dart.isTouching(player)) {
      gameState = "end";
      dart.velocityX = 0;
      dart.x = 800;
    }
  }
  if (gameState === "end") {
    player.velocityY = 0;
    player.velocityX = 0;
    lava.velocityX = 0;
    textSize(32);
    text("You Died", player.x + 200, 100);
    playAgain.x = player.x + 260;
    playAgain.visible = true;
    if (mousePressedOver(playAgain)) {
      gameState = "start";
      player.x = 100;
      player.y = 350;
    }
  }

  drawSprites();
}
function spawnObstacles() {
  var obstacles = createSprite(runner.x + 1000, 300, 20, 50);
}
