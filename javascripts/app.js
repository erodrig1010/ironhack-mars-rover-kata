// Rover Object Goes Here
var rover = {
  direction: "N",
  position: [0,0],
  travelLog: []
}
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.turn) {
    case "N":
      rover.turn = "W"
      return "Rover facing west.";
      break;
    case "S":
      rover.turn = "E"
      return "Rover facing east.";
      break;
    case "E":
      rover.turn = "N"
      return "Rover facing north.";
      break;
    case "W":
      rover.turn = "S"
      return "Rover facing south.";
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.turn) {
    case "N":
      rover.turn = "E"
      return "Rover facing east.";
      break;
    case "S":
      rover.turn = "W"
      return "Rover facing west.";
      break;
    case "E":
      rover.turn = "S"
      return "Rover facing south.";
      break;
    case "W":
      rover.turn = "N"
      return "Rover facing north.";
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.position) {
    case "N":
      rover.position = "y-1"
      console.log("Rover coordinates are [x,y].")
      break;
    case "S":
      rover.position = "y+1"
      console.log("Rover coordinates are [x,y].")
      break;
    case "E":
      rover.position = "x+1"
      console.log("Rover coordinates are [x,y].")
      break;
    case "W":
      rover.position = "x-1"
      console.log("Rover coordinates are [x,y].")
      break;
  }
}

function command() {
  for (var i=0; i<command.length; i++) {
  if (command === "f") {
    moveForward(rover);
  if (command === "r") {
    turnRight(rover);
  if (command === "l") {
    turnLeft(rover);
  } else {
    alert ("Use f, r, or l commands only");}
  }}}}
