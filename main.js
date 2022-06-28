var gameData = {
    uni: 0,
    accuracy: 0,
    uniPerGen: 1
  }

  function genUni() {
    gameData.uni += gameData.uniPerGen,
    document.getElementById("uniScore").innerHTML = gameData.uni + " universes generated"
  }