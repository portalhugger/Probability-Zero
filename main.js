// YOU SHOULD PROBABLY REWRITE ALL OF THIS

var gameData = {
  probability: (7.7 * 10) ^ 77777, // displayed as 7.7e77777
  universes: 0,
  uniTotal: 0,
  fabric: 0,
  fabricTotal: 0,
  researchPoints: 0,
  researchUnlock: 0,
  computation: 100,
  hyperMatter: 0,
  spareParts: 0,
  microchips: 0,
  functionData: 0,
  hyperVolume: 0,
  interRay: 0,
  metastability: 0,
  genSpeed: 0.1,
  scanSpeed: 0.3,
  asmSpeed: .01,
  dasmSpeed: .01
  
};

// on startup

window.onload = function () {
  loadSave();
};

// main game loop -- runs 20 times per second

var MainGameLoop = window.setInterval(function () {
  (document.getElementById('fabricScore').innerHTML =
    Math.round(gameData.fabric * 10) / 10 +
    ' (0.0/s) causal fabric extrapolated'),
    (document.getElementById('uniScore').innerHTML =
      Math.round(gameData.uniTotal) + ' (0.0/s) universes generated');
}, 50);

// other loops

var STATSloop = window.setInterval(function () {
  genFabric();
}, 1000);

// functions what make numbers go up

function genFabric() {
  gameData.fabric = Math.round((gameData.fabric + 0.1) * 10) / 10;
  gameData.fabricTotal = Math.round((gameData.fabricTotal + 0.1) * 10) / 10;
}

function genUni() {
  if (gameData.fabric == 0) {}
  if (gameData.fabric >= 0.99) {
    (gameData.fabric -= 1), (gameData.uniTotal += 1);
  }
  if (gameData.uniTotal >= 10) {
    document.getElementById('researchTabButton').style.display = 'inline-block';
  }
  
}

// saving

function manualSave() {
  localStorage.setItem('pZeroSave', JSON.stringify(gameData));
}

var autoSaveLoop = window.setInterval(function () {
  manualSave();
}, 10000);

var savegame = JSON.parse(localStorage.getItem('pZeroSave'));

function loadSave() {
  if (savegame !== null) {
    gameData = savegame;
    if (gameData.researchUnlock == 1) {
      document.getElementById('researchTabButton').style.display =
        'inline-block';
    }
  }
 else  {  document.getElementById('researchTabButton').style.display = 'none'; }
}

function resetSave() {
  (gameData.probability = (7.7 * 10) ^ 77777),
    (gameData.universes = 0),
    (gameData.uniTotal = 0),
    (gameData.fabric = 0),
    (gameData.fabricTotal = 0),
    (gameData.researchPoints = 0),
    (gameData.researchUnlock = 0),
    (gameData.computation = 100),
    (gameData.hyperMatter = 0),
    (gameData.spareParts = 0),
    (gameData.microchips = 0),
    (gameData.functionData = 0),
    (gameData.hyperVolume = 0),
    (gameData.interRay = 0),
    (gameData.metastability = 0),
    (gameData.genSpeed = 0.1),
    (gameData.scanSpeed = 0.3),
    (gameData.asmSpeed = .01),
    (gameData.dasmSpeed = .01),
    (document.getElementById('researchTabButton').style.display = 'none');
  manualSave();
}

// tab stuff

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName('function');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tabLink');
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' tabSelected', '');
  }
  document.getElementById(tabName).style.display = 'inline';
  evt.currentTarget.className += ' tabSelected';
}

// file stuff


function openFile(evt, fileName) {
  var i, x, fileLinks;
  x = document.getElementsByClassName('function1');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  fileLinks = document.getElementsByClassName('fileLink');
  for (i = 0; i < x.length + 4; i++) {
    fileLinks[i].className = fileLinks[i].className.replace(
      ' fileSelected',
      ''
    );
  }
  document.getElementById(fileName).style.display = 'block';
  evt.currentTarget.className += ' fileSelected';
}

// cooldown functions, listeners

function cooldown(coolSpeed, id) {
  if (coolSpeed == null) {
  } else {
    document.getElementById(id).disabled = true;
    document.getElementById(id).classList.add('disabledButton');
    setTimeout(function () {
      document.getElementById(id).disabled = false;
      document.getElementById(id).classList.remove('disabledButton');
    }, 100000 * coolSpeed);
  }
}

document
  .getElementById('scanButton')
  .addEventListener('click', () => cooldown(gameData.scanSpeed, 'scanButton'));
document
  .getElementById('genUniButton')
  .addEventListener('click', () => cooldown(gameData.genSpeed, 'genUniButton'));
document
  .getElementById('assembleButton')
  .addEventListener('click', () => cooldown(gameData.asmSpeed, 'assembleButton'));
document
  .getElementById('disassembleButton')
  .addEventListener('click', () => cooldown(gameData.dasmSpeed, 'disassembleButton'));
document
  .getElementById('reconButton')
  .addEventListener('click', () => cooldown(gameData.luckSpeed, 'reconButton'));




//detects if given div ID contains class


//refine universe generation
function refineGen(x) {}

//module

function activateM(x) {

if (x==1) {}
else if (x==2) {}
else if (x==3) {}
else if (x==4) {}
 
else {}


}

//handling number pad

function numPress(x) {
  
 var tbInput = document.getElementById('tbInput');
    tbInput.value = tbInput.value + x;
  
}

function clrPress() {
  
    var tbInput = document.getElementById("tbInput");
    tbInput.value = "";
  
}

function enterPress() {

var tbInput = document.getElementById("tbInput");  
if (tbInput.value == 1234567) {
 
  document.getElementById("activateM1Button").classList.remove('disabledButton');
}
else if (tbInput.value == 777777) {
  document.getElementById("activateM2Button").disabled = false;
  document.getElementById("activateM2Button").classList.remove('disabledButton');
}
else if (tbInput.value == 000000) {
  document.getElementById("activateM3Button").disabled = false;
  document.getElementById("activateM3Button").classList.remove('disabledButton');
}
else if (tbInput == 696969) {
  document.getElementById("activateM4Button").disabled = false;
  document.getElementById("activateM4Button").classList.remove('disabledButton');
}

else {

console.log("invalid password");

}
  

clrPress();
  
}

// learning functions

function learnBasicProg() {}
function learnCrypto() {}
function learnBasicUpgradeTerm() {}
function learnBasicUpgradeStats() {}
function learnAdvProg() {}
function learnBasicUpgradeLuck() {}
function learnEnhProg() {}
function learnAdvUpgradeTerm() {}
function learnAdvUpgradeLuck() {}
function learnAdvUpgradeStats() {}
function learnBasicUpgradeScanr() {}
function learnAdvUpgradeScanr() {}
function learnConvProg() {}
function learnEnhUpgradeTerm() {}
function learnEnhUpgradeLuck() {}
function learnEnhUpgradeStats() {}
function learnEnhUpgradeScanr() {}

// upgrade functions

function bUpgradeTerm() {}
function bUpgradeLuck() {}
function bUpgradeStats() {}
function bUpgradeScanr() {}

// reset modification functions

function researchResetToggle() {}
function fileAutoResetToggle() {}
function bUpgradeResetToggle() {}
function aUpgradeResetToggle() {}
function fabricMatterConverter() {}
function upgradeScanUnlock() {}
function convergeUnlock() {}
 
// generation functions

function genFData(x) {}
function genParts(x) {}
function genMChips(x) {}
function genTData(x) {}


