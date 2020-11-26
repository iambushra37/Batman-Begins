const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine
var maxDrops = 100
var drops = [];
function preload() {
    manAnimation = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", "Walking Frame/walking_3.png", "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", "Walking Frame/walking_6.png", "Walking Frame/walking_7.png", "Walking Frame/walking_8.png");
    thunderboltAnimation = loadAnimation("thunderbolt/1.png", "thunderbolt/2.png", "thunderbolt/3.png", "thunderbolt/4.png")
}

function setup() {
    canvas = createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;
    if (frameCount % 250 === 0) {
        for (var i = 0; i < maxDrops; i++) {
            drops.push(new Drops(random(0, 400), random(0, 400)));
        }
    }
    umbrella = new Umbrella();
    man = createSprite(200, 550, 10, 10);
    man.x = umbrella.body.position.x;
    man.y = umbrella.body.position.y;

    man.addAnimation("walking", manAnimation);
    man.scale = 0.5;
}

function draw() {
    background(0);
    Engine.update(engine);
    //man.display();

    for (var i = 0; i < maxDrops; i++) {
        drops[i].display();
        drops[i].update();
    }
    spawnThunder();

    drawSprites();
}

function spawnThunder() {
    if (frameCount % 60 === 0) {
        var thunder = createSprite(random(10, 350), 150, 10, 10);
        thunder.addAnimation("shiine", thunderboltAnimation);
        thunder.lifetime = 10;
    }
}