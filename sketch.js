var fr,mr;
function setup() {
  createCanvas(1000,800); 
 fr=createSprite(400, 200, 50, 50);
 mr=createSprite(500, 200, 50, 50);
fr.shapeColor="green";
mr.shapeColor="green";
fr.debug=true;
mr.debug=true;
}

function draw() {
  background(255,205,0);  
  mr.x=mouseX; 
  mr.y=World.mouseY; 
  //console.log(mr.x-fr.x); 
  if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2 && mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2 ) 
  { fr.shapeColor="red"; mr.shapeColor="red"; } 
  else
  { fr.shapeColor="green"; 
  mr.shapeColor="green"; 
     }
  drawSprites();
}