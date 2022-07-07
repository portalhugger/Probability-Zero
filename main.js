var gameData = {
  probability: 7.77 * 10^7777,
  uniTotal: 0,
  fabric: 0,
  fabricTotal: 0,
  researchUnlock: 0
}

// on startup

window.onload = function() {loadSave()}

// main game loop -- runs 20 times per second

var MainGameLoop = window.setInterval(function() {
  document.getElementById("fabricScore").innerHTML = "Causal fabric: " + (Math.round(gameData.fabric * 10) / 10),
  document.getElementById("uniTotalScore").innerHTML = "Universes generated: " + Math.round(gameData.uniTotal)
}, 50)

// other loops

var STATSloop = window.setInterval(function() {genFabric()}, 1000)

// functions what make numbers go up

function genFabric() {
  gameData.fabric = Math.round((gameData.fabric + 0.1) * 10) / 10
  gameData.fabricTotal = Math.round((gameData.fabricTotal + 0.1) * 10) / 10
}

function genUni() {
  if (gameData.fabric >= 0.99) {
    gameData.fabric -= 1,
    gameData.uniTotal += 1
  }
  if (gameData.uniTotal >= 10) {
    document.getElementById("researchTabButton").style.display = "inline-block";
  }
}

// saving

function manualSave() {
  localStorage.setItem("pZeroSave", JSON.stringify(gameData))
}

var autoSaveLoop = window.setInterval(function() {manualSave()}, 10000)

var savegame = JSON.parse(localStorage.getItem("pZeroSave"))

function loadSave() {
  if (savegame !== null) {
    gameData = savegame
  }
  if (researchUnlock == 1) {
    document.getElementById("researchTab").style.display = "inline-block";
  }
}

function resetSave() {
  gameData.probability = 7.77 * 10^7777,
  gameData.uniTotal = 0,
  gameData.fabric = 0,
  gameData.fabricTotal = 0,
  gameData.researchUnlock = 0,
  document.getElementById("researchTabButton").style.display = "none";
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
  document.getElementById(tabName).style.display = "inline";
  evt.currentTarget.className += " tabSelected";
}