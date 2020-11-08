var tileCountHoriz = 30;
var tileCountVert = 20;
var levelmap = [];
const tileScale = 40;
function generate_levelMap() {
  for(let i = 0; i < tileCountHoriz; ++i) {
      levelmap[i] = [];
    for(let j = 0; j < tileCountVert; ++j) {
      levelmap[i][j] = 0;
    }
  }
}

function draw_level() {
  generate_levelMap();
  // define colors
// 1=red, 2 = orange, 3 = yellow, 4 = green, 5 = blue, 6 = pink
let colors = ['orange', 'yellow', 'green','red', 'blue', 'violet', 'orange','orange','grey'];
  // keep state of room:
  noiseSeed(player_minimap_pos.x*10+player_minimap_pos.y);
  background(255);
  var nyOff=0;
  for(let levX=0;levX<tileCountHoriz;levX++){
    var nxOff=0;
    for(var levY=0;levY<tileCountVert;levY++){
      // var index = (x+y *width)*4;
      var r = Math.floor(noise(nxOff, nyOff) *9);
      if(levX == Math.floor(tileCountHoriz/2) || levY == Math.floor(tileCountVert/2)) levelmap[levX][levY] = 3;
      else levelmap[levX][levY] = r;
      nxOff+=.1;
    
      if(levX == Math.floor(tileCountHoriz/2) || levY == Math.floor(tileCountVert/2)) fill(colors[3]);
      else fill(colors[r]);
      rect(levX*tileScale+345, levY*tileScale+105, tileScale, tileScale);
    }
    nyOff+=.1;
  }
  // console.log(levelmap);
  // noLoop();
  fill(color("white"));
  var offset = tileScale/2;
  circle(345+offset+player_level_pos.x*tileScale,105+offset+player_level_pos.y*tileScale,30);
}
