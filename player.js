var player_minimap_pos;
var player_inv = new Object();

function init_inv() {
  player_inv.red = false;
  player_inv.orange = false;
  player_inv.yellow = false;
  player_inv.green = false;
  player_inv.blue = false;
  player_inv.violet = false;
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
  add_current_color_to_inv();
  player_minimap_pos.y -= 1;
}

function go_down() {
  if(player_minimap_pos.y + 1 >= minimap_size)
    return;
  if(minimap[player_minimap_pos.x][player_minimap_pos.y + 1] == 0)
    return;
  draw_level();
  add_current_color_to_inv();
  player_minimap_pos.y += 1;
}

function go_left() {
  if(player_minimap_pos.x - 1 < 0)
    return;
  if(minimap[player_minimap_pos.x - 1][player_minimap_pos.y] == 0)
    return;
  draw_level();
  add_current_color_to_inv();
  player_minimap_pos.x -= 1;
}

function go_right() {
  if(player_minimap_pos.x + 1 >= minimap_size)
    return;
  if(minimap[player_minimap_pos.x + 1][player_minimap_pos.y] == 0)
    return;
  draw_level();
  add_current_color_to_inv();
  player_minimap_pos.x += 1;
}

function die() {
  player_minimap_pos.x = minimap_starting_room_obj.x;
  player_minimap_pos.y = minimap_starting_room_obj.y;
}