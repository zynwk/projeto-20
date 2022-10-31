const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var block1,block2,block3;


function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //criado corpos do plano e bloco
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,580,1200,2,plane_options);
    World.add(world,plane);
  
    //criados múltiplos corpos de blocos 
    var block1_options = {
      restitution:0.5,
      friction:0.02,
      frictionAir:0
    }

    var block2_options = {
      restitution:0.7,
      friction:0.01,
      frictionAir:0.1
    }

    var block3_options = {
      restitution:0.01,
      friction:1,
      frictionAir:0.3
    }

    block1 = Bodies.circle(220,10,10,block1_options);
    World.add(world,block1);
    
    block2 = Bodies.rectangle(110,50,10,10,block2_options);
    World.add(world,block2);
    
    block3 = Bodies.rectangle(350,50,10,10,block3_options);
    World.add(world,block3);
    
    
    //estilizando os corpos aqui
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background(0);
    Engine.update(engine);

  //criada forma para o plano e suporte
  rect(plane.position.x,plane.position.y,1200);
  

  //criadas formas para todas as partículas
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,50,50)
  rect(block3.position.x,block3.position.y,100,50)

  
}