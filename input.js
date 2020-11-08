var up_button;
var down_button;
var left_button;
var right_button;

function input_setup() {
  iconhtml = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/></svg>'
  btnclass= 'btn btn-dark'
  up_button = createButton('up');
  up_button.addClass(btnclass);
  up_button.html(iconhtml);
  down_button = createButton('down');
  down_button.addClass(btnclass);
  down_button.html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/></svg>');
  left_button = createButton('left');
  left_button.html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>');
  left_button.addClass(btnclass);
  right_button = createButton('right');
  right_button.html('<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>');
  right_button.addClass(btnclass);

  up_button.mousePressed(go_up);
  down_button.mousePressed(go_down);
  left_button.mousePressed(go_left);
  right_button.mousePressed(go_right);
}

function on_key_pressed() {
  let keyIndex = -1;
  if (key == 'w' || keyCode == UP_ARROW) {
    level_go_up();
  } else if (key == 'a' || keyCode == LEFT_ARROW) {
    level_go_left();
  } else if (key == 's' || keyCode == DOWN_ARROW) {
    level_go_down();
  } else if (key == 'd' || keyCode == RIGHT_ARROW) {
    level_go_right();
  } 

  if (key=='r') {
    generate_minimap();
    draw_level();  
  }

  if (key == '1') {
    setGamestateMenu();
  }

  if (key == '2') {
    setGamestateRed();
  }

  if (key == '3') {
    setGamestateOrange();
  }

  if (key == '4') {
    setGamestateYellow();
  }

  if (key == '5') {
    setGamestateGreen();
  }

  if (key == '6') {
    setGamestateBlue();
  }

  if (key == '7') {
    setGamestatePurple();
  }

  if (key == '0') {
    die();
  }

}