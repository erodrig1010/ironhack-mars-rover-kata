// Rover Object Goes Here
var rover = {
  direction: "N",
  positionX: 0,
  positionY: 0,
};
  travelLog = [];


// ======================


function turnLeft(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
      console.log("Rover is now facing west.");
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing east.");
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing north.");
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover is now facing south.");
      break;
  }
}
// turnLeft()

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is now facing east.");
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing west.");
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover is now facing south.");
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover is now facing north.");
      break;
  }
}
// turnRight()


function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.positionY = rover.positionY - 1;
      travelLog.push("[ " + rover.positionX + ", " + rover.positionY + " ]");
      break;
    case "S":
      rover.positionY = rover.positionY + 1;
      travelLog.push("[ " + rover.positionX + ", " + rover.positionY + " ]");
      break;
    case "E":
      rover.positionX = rover.positionX + 1;
      travelLog.push("[ " + rover.positionX + ", " + rover.positionY + " ]");
      break;
    case "W":
      rover.positionX = rover.positionX - 1;
      travelLog.push("[ " + rover.positionX + ", " + rover.positionY + " ]");
      break;
  }
  console.log("Moving forward, Rover coordinates are now [ " + rover.positionX + ", " + rover.positionY + " ]");
}
// moveForward()


function command(commands) {
  for (var i = 0; i < commands.length; i++) {
  if (commands[i] === "f") {
    moveForward(rover);
  }else if (commands[i] === "r") {
    turnRight(rover);
  }else if (commands[i] === "l") {
    turnLeft(rover);
  } else {
    alert ("Use f, r, or l commands only");}
  }
  console.log("Rover movements " + travelLog);
}
command()