
var newnursery
var gamestate = "menu"

function  preload(){
  nurseryimg = loadImage("nursery.png")
  bambooimg = loadImage("bamboo.png")
  pathwayimg = loadImage("pathway.png")
  saplingimg = loadImage("sapling.png")
  streamimg = loadImage("stream.png")
  thermometerimg = loadImage("thermometer.png")
  saplingimg = loadImage("sapling.png")
  toolshedimg = loadImage("Untitled.png")
  ashokaimg = loadImage("ashoka.png")
  herbalimg = loadImage("herbal.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  newnursery = createSprite(windowWidth/10 +10 , windowHeight/10+10, 150, 150)
  newnursery.addImage("nur",nurseryimg);
  pathway = createSprite(windowWidth/10 +10, windowHeight/10+250, 50, 50)
  pathway.addImage("path",pathwayimg);
  pathway.scale = 0.9;
  toolshed = createSprite(windowWidth/10+10, windowHeight/10+480, 50, 50)
  toolshed.addImage("tool",toolshedimg);
  toolshed.scale = 0.6;
  transformer = createSprite(windowWidth/10+10, windowHeight/10+600, 50, 50)
  transformer.addImage("transformer",thermometerimg);
  transformer.scale = 0.4;
  ashokavanam = createSprite(windowWidth/10+200, windowHeight/10+200, 50, 50)
 ashokavanam.addImage("ashoka",ashokaimg);
 ashokavanam.scale = 0.7;
  herbalgarden = createSprite(windowWidth/10+200, windowHeight/10+400, 50, 50)
  herbalgarden.addImage("herb",herbalimg);
  herbalgarden.scale = 0.7;
  servicegate = createSprite(windowWidth/2, windowHeight/2, 50, 50)
 // newnursery.addImage("nur",nurseryimg);
  maingate = createSprite(windowWidth/2, windowHeight/2, 50, 50)
  //newnursery.addImage("nur",nurseryimg);
  saplings = createSprite(windowWidth/10+200, windowHeight/10+600, 50, 50)
  saplings.addImage("sapling",saplingimg);
  saplings.scale = 0.7;
  bamboo = createSprite(windowWidth/10+800, windowHeight/10+10, 50, 50)
  bamboo.addImage("bamboo",bambooimg);
  bamboo.scale = 0.7;
  stream = createSprite(windowWidth/10+380, windowHeight/10+100, 50, 50)
  stream.addImage("stream",streamimg);
  stream.scale = 1;
  
  //newnursery.addImage("pic",img);

 
}

function draw() {
  
  background("white");  
  drawSprites();
  textSize(15);
  fill("red")
  
    if (mousePressedOver(newnursery))
      {
        gamestate="Nursery";
        newnursery.remove();
    
    }

    if (gamestate === "Nursery"){
      text("water saplings", newnursery.x,newnursery.y)
    }
    if (mousePressedOver(pathway))
      {
        gamestate="pathway";
        pathway.remove();
    
    }

    if (gamestate === "pathway"){
      text("clear pathway", pathway.x,pathway.y)
    }
    if (mousePressedOver(toolshed))
    {
      gamestate="tool";
      toolshed.remove();
  
  }

  if (gamestate === "tool"){
    text("tools to be used", toolshed.x,toolshed.y)
  }
  if (mousePressedOver(transformer))
      {
        gamestate="transformer";
        transformer.remove();
    
    }

    if (gamestate === "transformer"){
      text("repair", transformer.x,transformer.y)
    }

    if (mousePressedOver(ashokavanam))
      {
        gamestate="ashokavanam";
        ashokavanam.remove();
    
    }

    if (gamestate === "ashokavanam"){
      text("ashoka trees needs water", ashokavanam.x,ashokavanam.y)
    }
    if (mousePressedOver(herbalgarden))
      {
        gamestate="herbalgarden";
        herbalgarden.remove();
    
    }

    if (gamestate === "herbalgarden"){
      text("needed herbs", herbalgarden.x,herbalgarden.y)
    }
    if (mousePressedOver(saplings))
      {
        gamestate="saplings";
        saplings.remove();
    
    }

    if (gamestate === "saplings"){
      text("saplings needs manure", saplings.x,saplings.y)
    }
    if (mousePressedOver(bamboo))
      {
        gamestate="bamboo";
        bamboo.remove();
    
    }

    if (gamestate === "bamboo"){
      text("bamboo needs panda", bamboo.x,bamboo.y)
    }

}