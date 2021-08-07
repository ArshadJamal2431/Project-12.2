//create a varibles with name
var garden,rabbit,apple,leaf,orangeleaf,redleaf;
var gardenImg,rabbitImg,appleImg,leafImg,orangeleafImg,redleafImg;

function preload(){
  //pre-load images
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg =  loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeleafImg = loadImage("orangeLeaf.png");
  redleafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// create Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//create rabbit 
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
//Rabbit moving on X-axis with mouse
  rabbit.x = World.mouseX;

//creating edge sprites
  edges= createEdgeSprites();

  //making rabbit collide with edges
  rabbit.collide(edges);
  drawSprites();

  var select_sprites = Math.round(random(1,4));
  if(frameCount%80==0){
    if(select_sprites ==1){
      createApples();
    }else if(select_sprites ==2){
      createLeaf();
    }else if(select_sprites ==3){
      createOrangeleaf();
    }else{
      createredleaf();
    }
    }
  }


//creating function create Apples
function createApples (){
apple = createSprite(random(50,350),40);
apple.addImage(appleImg);
apple.scale = 0.06;
apple.velocityY = 3;
apple.lifetime = 150;
}

//creating function create Leaf
function createLeaf (){
    leaf = createSprite(random(50,350),40);
    leaf.addImage(leafImg);
    leaf.scale = 0.05;
    leaf.velocityY = 2.7;
    leaf.leaftime = 150;
  }

  //creating function create orangeLeaf
function createOrangeleaf (){
    orangeleaf = createSprite(random(50,350),40);
    orangeleaf.addImage(orangeleafImg);
    orangeleaf.scale = 0.07;
    orangeleaf.velocityY = 2.5;
    orangeleaf.leaftime = 150;
  }

  //creating function create redLeaf
  function createredleaf (){
    redleaf = createSprite(random(50,350),40);
    redleaf.addImage(redleafImg);
    redleaf.scale = 0.05;
    redleaf.velocityY = 2.6;
    redleaf.leaftime = 150;
  }