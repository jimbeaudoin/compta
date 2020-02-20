// index.js

var currentText = null;
var currentResponse = null;
var textContainer = document.getElementById("text");
var responseContainer = document.getElementById("response");
var responseButton = document.getElementById("response-button");
var nextButton = document.getElementById("next-button");

var data = {
  "Encaisse": "Actif",
  "Fournisseurs": "Passif"
}

setData();

responseButton.addEventListener("click", function() {
  responseContainer.innerHTML = currentResponse;
});

nextButton.addEventListener("click", function() {
  setData();
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function length(obj) {
  return Object.keys(obj).length;
}

function setData() {
  responseContainer.innerHTML = "";
  var randomNumber = getRandomInt(length(data));
  currentText = Object.keys(data)[randomNumber];
  currentResponse = Object.values(data)[randomNumber];
  textContainer.innerHTML = currentText;
}