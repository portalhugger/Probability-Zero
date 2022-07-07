var gameData = {
  probability: 7.77 * 10^7777,
  uniTotal: 0,
  fabric: 0,
  fabricTotal: 0
}

var MainGameLoop = window.setInterval(function() {
  document.getElementById("fabricScore").innerHTML = "Causal fabric: " + (Math.round(gameData.fabric * 100) / 100),
  document.getElementById("uniTotalScore").innerHTML = "Universes generated: " + Math.round(gameData.uniTotal)
}, 50)

var STATSloop = window.setInterval(function() {genFabric()}, 1000)

function genFabric() {
  gameData.fabric += 0.1,
  gameData.fabricTotal += 0.1
}

function genUni() {
  if (gameData.fabric >= 1) {
    gameData.fabric -= 1,
    gameData.uniTotal += 1
  }
}

// saving

function manualSave() {
  localStorage.setItem("pZeroSave", JSON.stringify(gameData))
}

var saveGameLoop = window.setInterval(function() {manualSave()}, 120000)

var savegame = JSON.parse(localStorage.getItem("pZeroSave"))
if (savegame !== null) {
  gameData = savegame
}

function resetSave() {
  gameData.probability = 7.77 * 10^7777,
  gameData.uniTotal = 0,
  gameData.fabric = 0,
  gameData.fabricTotal = 0
  manualSave()
}

// tab stuff

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