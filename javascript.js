var symbolComputer;
var symbolSpieler;
var anzahlRunden = 0;
var gewinneComputer = 0;
var gewinneSpieler = 0;
const GEWINNBEDINGUNG = 3;

//computer generates random posibility  of R-S-P
function choiceOfCom() {
  symbolComputer = Math.round(Math.random() * 3);
  if (symbolComputer == 1) {
    document.getElementById("imgSkynet").setAttribute("src", "img/rock.jpg");
    // document.getElementById("rockCom").style.display = "block";
    // document.getElementById("imgSkynet").style.display = "none";
    // document.getElementById("paperCom").style.display = "none";
    // document.getElementById("scissorsCom").style.display = "none";
  } else if (symbolComputer == 2) {
    document.getElementById("imgSkynet").setAttribute("src", "img/paper.jpg");
    // document.getElementById("paperCom").style.display = "block";
    // document.getElementById("imgSkynet").style.display = "none";
    // document.getElementById("rockCom").style.display = "none";
    // document.getElementById("scissorsCom").style.display = "none";
  } else {
    document
      .getElementById("imgSkynet")
      .setAttribute("src", "img/scissors.jpg");
    // document.getElementById("scissorsCom").style.display = "block";
    // document.getElementById("imgSkynet").style.display = "none";
    // document.getElementById("paperCom").style.display = "none";
    // document.getElementById("rockCom").style.display = "none";
  }
}
//player chooses his choice

document.getElementById("rock").addEventListener("click", choiceOfPlayerRock);
document.getElementById("paper").addEventListener("click", choiceOfPlayerPaper);
document
  .getElementById("scissors")
  .addEventListener("click", choiceOfPlayerScissors);

function choiceOfPlayerRock() {
  symbolSpieler = 1;
  startAll();
}
function choiceOfPlayerPaper() {
  symbolSpieler = 2;
  startAll();
}
function choiceOfPlayerScissors() {
  symbolSpieler = 3;
  startAll();
}

//compare results with if R beats S - S  beats P - P beats R
//safe result in gewinneComputer or gewinneSpieler
function roundResulting() {
  if (symbolSpieler == symbolComputer) {
    anzahlRunden++;
    alert("TIE - next round");
  } else if (symbolSpieler == 1 && symbolComputer == 3) {
    gewinneSpieler++;
    anzahlRunden++;
  } else if (symbolSpieler == 3 && symbolComputer == 2) {
    gewinneSpieler++;
    anzahlRunden++;
  } else if (symbolSpieler == 2 && symbolComputer == 1) {
    gewinneSpieler++;
    anzahlRunden++;
  } else {
    gewinneComputer++;
    anzahlRunden++;
  }
}

function counter() {
  document.getElementById("roundCounter").innerHTML = anzahlRunden;
  document.getElementById("scoreCom").innerHTML = gewinneComputer;
  document.getElementById("scorePlayer").innerHTML = gewinneSpieler;
}

//compare gewinneComputer/ gewinneSpieler with GEWINNBEDINGUNG - achieved WON

function gameResulting() {
  if (gewinneSpieler == GEWINNBEDINGUNG) {
    anzahlRunden = 0;
    gewinneComputer = 0;
    gewinneSpieler = 0;
    document.getElementById("imgSkynet").setAttribute("src", "img/Skynet.jpg");
    alert("YOU WON - Skynet lost - Humanity will survive");
  } else if (gewinneComputer == GEWINNBEDINGUNG) {
    anzahlRunden = 0;
    gewinneComputer = 0;
    gewinneSpieler = 0;
    document.getElementById("imgSkynet").setAttribute("src", "img/Skynet.jpg");
    alert(
      "Skynet WON - You lost - /n Humanity got exterminated, machines ruling the world now"
    );
  }
}

function startAll() {
  choiceOfCom();
  roundResulting();
  gameResulting();
  counter();
}
