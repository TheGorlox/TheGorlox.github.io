fps = 2**5;

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(fps);
  
  init_inv();
  inv_increment(); // Hacky way to give Red to the Player at the start
  generate_minimap();
  input_setup();
  setGamestateMenu();
  set_button_positions();

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  set_button_positions();

}

function draw() {

  clear();

  // background(128*Math.sin(frameCount/fps) + 128, 128*Math.sin(frameCount/fps + 64) + 128, 128*Math.sin(frameCount/fps + 128) + 128);

  draw_level();
  draw_minimap();
  draw_progress_bar();

}

function keyPressed() {
	on_key_pressed();
}
