var minimap_size = 10;
var minimap = [];
var minimap_starting_room_obj = new Object();

function set_button_positions() {
  up_button.position(185,66);
  down_button.position(185,301);
  left_button.position(60 ,175);
  right_button.position(300, 175);
}

function generate_minimap() {
  
  for(let i = 0; i < minimap_size; ++i) {
    minimap[i] = [];
    for(let j = 0; j < minimap_size; ++j) {
      minimap[i][j] = 0;
    }
  }
  
  minimap_starting_room_obj.x = Math.floor(Math.random() * 10); 
  minimap_starting_room_obj.y = Math.floor(Math.random() * 10); 
  
  player_minimap_pos = Object.assign({}, minimap_starting_room_obj);
  
  minimap[minimap_starting_room_obj.x][minimap_starting_room_obj.y] = 1;
  
  
  
  console.log()
  expand(minimap, minimap_starting_room_obj.x, minimap_starting_room_obj.y, 1.5, 0.7, 3);
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
  
  for(let i = 0; i < minimap_size; ++i) {
    for(let j = 0; j < minimap_size; ++j) {
      if(minimap[i][j] != 0) {
        minimap[i][j] = colors[Math.floor(Math.random() * 6)];
      }
    }
  }

  let run = true;
  while(run) {
	let colors_left = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
	for(let i = 0; i < minimap_size; ++i) {
    for(let j = 0; j < minimap_size; ++j) {
			let index = colors_left.indexOf(minimap[i][j]);
			if(index > -1) {
				colors_left.splice(index, 1);
			}
		}
	}
	for(c of colors_left) {
		let x = 0;
		let y = 0;
		do {
		x = Math.floor(Math.random() * 10);
		y = Math.floor(Math.random() * 10);
		} while(minimap[x][y] == 0);
		minimap[x][y] = c;
	}
	if(colors_left.length == 0)
		run = false;
  }

  
  console.log(minimap);

}

function expand(minimap,i,j,chance, falloff, rooms_left) {
  console.log("vars: " + i + " " + j + " " + chance);
  
  if (Math.random() > chance + rooms_left) {
    return false;
  }

  minimap[i][j] = 1;
  
  let branches = 2;

  if(j-1 > 0 && minimap[i][j-1] === 0) {
    if(expand(minimap, i, j-1, chance*falloff, falloff, rooms_left-1))
		branches -= 1;
  }
  if(j+1 < minimap_size && minimap[i][j+1] === 0 && branches > 0) {
    if(expand(minimap, i, j+1, chance*falloff, falloff, rooms_left-1))
		branches -= 1;
  }
  if(i-1 > 0 && minimap[i-1][j] === 0 && branches > 0) {
    if(expand(minimap, i-1, j, chance*falloff, falloff, rooms_left-1))
		branches -= 1;
  }
  if(i+1 < minimap_size && minimap[i+1][j] === 0 && branches > 0) {
    if(expand(minimap, i+1, j, chance*falloff, falloff, rooms_left-1))
		branches -= 1;
  }
  
  return true;
}

function draw_minimap() {

  for(let i = 0; i < minimap_size; ++i) {
    for(let j = 0; j < minimap_size; ++j) {

      switch(minimap[i][j]) {

        case 0:
        fill(color('black'));
        break;
        
        default:
        fill(color(minimap[i][j]));
        break;
        
      }
      
      square(100+i*20, 100+j*20, 20);
      
    }
  }
  
  fill(color('white'));
  circle(110+player_minimap_pos.x*20,110+player_minimap_pos.y*20,15);
  
}
  
function draw_progress_bar() {
  let count = 6;
  let increment = windowHeight * 0.8 / count;
  let size = increment * 0.9;
  let padding = windowHeight * 0.1;
  
  strokeWeight(4);
  
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
  
  for(let i = 0; i < 6; i++) {
  	stroke(color('black'));
  	fill(color("black"));
  	square(windowWidth - increment - 5, increment * i + padding, increment);
	  stroke(color(colors[i]));
	  if(player_inv[colors[i]]) {
      fill('black');
	  } else {
	  	fill(colors[i]);
	  }
	  square(windowWidth - increment - 5 + (increment-size)/2, increment * i + padding + (increment-size)/2, size);
  }
  
  strokeWeight(1);
  stroke(color('black')); 
}
