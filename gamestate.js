function setGamestateMenu() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    // This is just a sin wave to demo, purpose of this is to allow the map to be modified dynamically in the future
    return Math.abs(j - (jMax-2)/2 * (-Math.sin(i*2*Math.PI/(iMax-1) + 2*Math.PI*(phase%100)/100) + 1)) < 3;
  }

  tileGapSize = 3;
  tileCountHoriz = 18;
  tileCountVert = 12;

}

function setGamestateRed() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    return Math.abs(jMax/2 - j) < 2;
  }

  tileGapSize = 0;
  tileCountHoriz = 18;
  tileCountVert = 12;

}

function setGamestateOrange() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    return true;
  }

  tileGapSize = 0;
  tileCountHoriz = 18;
  tileCountVert = 12;

}

function setGamestateYellow() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    return true;
  }

  tileGapSize = 0;
  tileCountHoriz = 18;
  tileCountVert = 12;

}

function setGamestateGreen() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    return true;
  }

  tileGapSize = 0;
  tileCountHoriz = 18;
  tileCountVert = 12;

}

function setGamestateBlue() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    return true;
  }

  tileGapSize = 0;
  tileCountHoriz = 18;
  tileCountVert = 12;

}

function setGamestatePurple() {

  tileExistsCriteriaFunction = (i, j, iMax, jMax, phase) => {
    return true;
  }

  tileGapSize = 0;
  tileCountHoriz = 18;
  tileCountVert = 12;

}
