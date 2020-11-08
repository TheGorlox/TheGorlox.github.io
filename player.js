var player_minimap_pos;
var player_level_pos;
var player_inv = new Object();

function init_inv() {
  player_inv.red = false;
  player_inv.orange = false;
  player_inv.yellow = false;
  player_inv.green = false;
  player_inv.blue = false;
  player_inv.violet = false;
}

function inv_increment() {
  if(player_inv.blue) player_inv.violet = true;
  else if(player_inv.green) player_inv.blue = true;
  else if(player_inv.yellow) player_inv.green = true;
  else if(player_inv.orange) player_inv.yellow = true;
  else if(player_inv.red) player_inv.orange = true;
  else player_inv.red = true;
}

function add_current_color_to_inv() {
	player_inv[minimap[player_minimap_pos.x][player_minimap_pos.y]] = true;
}

function go_up() {
  if(player_minimap_pos.y - 1 < 0)
    return;
  if(minimap[player_minimap_pos.x][player_minimap_pos.y - 1] == 0)
    return;
  draw_level();
  player_minimap_pos.y -= 1;
}

function go_down() {
  if(player_minimap_pos.y + 1 >= minimap_size)
    return;
  if(minimap[player_minimap_pos.x][player_minimap_pos.y + 1] == 0)
    return;
  draw_level();
  player_minimap_pos.y += 1;
}

function go_left() {
  if(player_minimap_pos.x - 1 < 0)
    return;
  if(minimap[player_minimap_pos.x - 1][player_minimap_pos.y] == 0)
    return;
  draw_level();
  player_minimap_pos.x -= 1;
}

function go_right() {
  if(player_minimap_pos.x + 1 >= minimap_size)
    return;
  if(minimap[player_minimap_pos.x + 1][player_minimap_pos.y] == 0)
    return;
  draw_level();
  player_minimap_pos.x += 1;
}

function level_go_up() {
  if(player_level_pos.y - 1 < 0 )
    return;
  if (!hasColor(player_level_pos.x, player_level_pos.y-1)) {
    die();
    return;
  }
  player_level_pos.y -= 1;
}

function level_go_down() {
  if(player_level_pos.y + 1 > tileCountVert-1)
    return;
  if (!hasColor(player_level_pos.x, player_level_pos.y+1)) {
    die();
    return;
  }
  player_level_pos.y += 1;
}

function level_go_left() {
  if(player_level_pos.x - 1 < 0)
    return;
  if (!hasColor(player_level_pos.x-1, player_level_pos.y)) {
    die();
    return;
  }
  player_level_pos.x -= 1;
}

function level_go_right() {
  if(player_level_pos.x + 1 > tileCountHoriz-1)
    return;
  if (!hasColor(player_level_pos.x+1, player_level_pos.y)) {
    die();
    return;
  }
  player_level_pos.x += 1;
}

function hasColor(x,y) {
  switch(levelmap[x][y]) {
    case 0:
      return player_inv.orange;
      break;
    case 1:
      return player_inv.yellow;
      break;
    case 2:
      return player_inv.green;
      break;
    case 3:
      return player_inv.red;
      break;
    case 4:
      return player_inv.blue;
      break;
    case 5:
      return player_inv.violet;
      break;
    default:
      return false;
      break;
  }
}

function die() {
  init_inv();
  inv_increment();
  draw_level();
  player_minimap_pos.x = minimap_starting_room_obj.x;
  player_minimap_pos.y = minimap_starting_room_obj.y;
  player_level_pos.x = Math.floor(tileCountHoriz/2);
  player_level_pos.y = Math.floor(tileCountVert/2);
}