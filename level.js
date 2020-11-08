var tileExistsCriteriaFunction;
var tileGapSize;
var tileCountHoriz;
var tileCountVert;
var cols, rows;

function draw_level() {
  // define colors
var black = [0,0,0];
var b = [0,255,0];
var teal = [0,128,128];
var orange = [255,165,0];
var white = [255,255,255];
var r = [255,0,0];
var g = [0,255,0];
var brown = [165,42,42];
var yellow = [255,2550,0];
var purple = [128,0,128];
var grey = [100,100,100];
var colors = [black, white, g,grey,orange,yellow,purple,teal,r,b];
var scl = 41;

  cols = floor(width/scl)
  rows = floor(height/scl)
  // ROWx10 (row___)
  // colx1 (ROWCOL) FOR SEED
  noiseSeed(player_minimap_pos.x*10+player_minimap_pos.y);
  background(255);
  var yoff=0;
  for(let y=0;y<rows;y++){
    var xoff=0;
    for(var x=0;x<cols;x++){
      // var index = (x+y *width)*4;
      var r = Math.floor(noise(xoff, yoff) *9);
    
      xoff+=.1;
      
      fill(colors[r][0],colors[r][1],colors[r][2],);
      rect(x*scl, y*scl, scl, scl);
    }
    yoff+=.1;
  }

  fill(color("white"));
  circle(scl/2+player_level_pos.x*scl,scl/2+player_level_pos.y*scl,30);
}