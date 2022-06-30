var gameData = {
  uni: 0,
  accuracy: 0,
  gen: 1,
  genCost: 10
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

/// TAB 1: COMPUTER TERMINAL

function genUni() {
  gameData.uni += gameData.gen,
  document.getElementById("uniScore").innerHTML = gameData.uni + " universes generated"
}

function buyGen() {
  if (gameData.uni >= gameData.genCost) {
    gameData.uni -= gameData.genCost
    gameData.gen += 1
    gameData.genCost += 10
    document.getElementById("genUniButton").innerHTML = `» generate ${gameData.gen} random universes «`
    document.getElementById("uniScore").innerHTML = gameData.uni + " universes generated"
  }
}

///TAB 2: 