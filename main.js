var gameData = {
  uni: 0,
  accuracy: 0,
  }

window.onload = loadSave

function loadSave() {
  if (localStorage.uni) {
    gameData.uni = Number(localStorage.uni);
  }
  document.getElementById("uniScore").innerHTML = gameData.uni + " universes generated"
}

function resetSave() {
  gameData.uni = 0,
  document.getElementById("uniScore").innerHTML = gameData.uni + " universes generated"
}

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("function");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabSelected", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tabSelected";
}

function genUni() {
  gameData.uni += 1,
  document.getElementById("uniScore").innerHTML = gameData.uni + " universes generated"
  if (typeof(Storage) !== "undefined") {
    localStorage.uni = Number(gameData.uni);
  }
}