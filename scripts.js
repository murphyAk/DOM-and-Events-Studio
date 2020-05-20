// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  let launchButton = document.getElementById("takeoff");
  let landButton = document.getElementById("landing");
  let abortButton = document.getElementById("missionAbort");
  let flightStatus = document.getElementById("flightStatus");
  let bckColor = document.getElementById("shuttleBackground");
  let shuttleHeight = document.getElementById("spaceShuttleHeight");
  let upButton = document.getElementById("up");
  let downButton = document.getElementById("down");
  let rightButton = document.getElementById("right");
  let leftButton = document.getElementById("left");
  let shuttleImage = document.getElementById("rocket");
  let shuttleMove = 0;

  launchButton.addEventListener("click", takeOff);

  function takeOff(e) {
    if (confirm("Confirm that the shuttle is ready for takeoff.")) {
      flightStatus.innerText = "Shuttle in flight.";
      bckColor.style.backgroundColor = "blue";
      shuttleHeight.innerText = 10000;
    }
  }

  landButton.addEventListener("click", land);

  function land(e) {
    if (shuttleHeight.innerText > 0) {
      alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerText = "The shuttle has landed.";
      bckColor.style.backgroundColor = "green";
      shuttleHeight.innerText = 0;
    } else if (shuttleHeight.innerText <= 0) {
      alert("Shuttle is already grounded");
    }
  }

  abortButton.addEventListener("click", abort);

  function abort(e) {
    if (confirm("Confirm that you want to abort the mission.")) {
      flightStatus.innerText = "Mission aborted.";
      bckColor.style.backgroundColor = "green";
      shuttleHeight.innerText = 0;
    }
  }

  rightButton.addEventListener("click", moveRight);

  function moveRight(e) {
    shuttleMove += 1;
    shuttleImage.style.left = shuttleMove + "px";
  }

  leftButton.addEventListener("click", moveLeft);

  function moveLeft(e) {
    shuttleMove -= 1;
    shuttleImage.style.left = shuttleMove + "px";
  }

  upButton.addEventListener("click", moveUp);

  function moveUp(e) {
    shuttleMove += 1;
    shuttleImage.style.bottom = shuttleMove + "px";
    shuttleHeight.innerText = Number(shuttleHeight.innerText) + 10000;
  }

  downButton.addEventListener("click", moveDown);

  function moveDown(e) {
    shuttleMove -= 1;
    shuttleImage.style.bottom = shuttleMove + "px";
    shuttleHeight.innerText = Number(shuttleHeight.innerText) - 10000;
  }

  console.log(Boolean(takeOff));
}

window.onload = init;
