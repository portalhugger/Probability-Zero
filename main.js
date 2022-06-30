var gameData = {
    uni: 0,
    accuracy: 0,
    gen: 1,
    genCost: 10
  }

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
  