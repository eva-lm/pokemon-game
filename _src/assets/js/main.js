"use strict";
const button = document.querySelector(".js-button");
const input = document.querySelector("input");
let pokemon = [];

const inputFour = document.querySelector(".js-input-4");
const inputSix = document.querySelector(".js-input-6");
const inputEight = document.querySelector(".js-input-8");
function getDataFromServer() {
  console.log("Recogemos los datos de la Api y escuchamos el tamaño clickado");
  pokemon = [];
  if (inputFour.checked === true) {
    inputSix.checked = false;
    inputEight.checked = false;
    return fetch(
      `https://raw.githubusercontent.com/Adalab/cards-data/master/${
        inputFour.value
      }.json`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        saveData(data);
      });
  } else if (inputSix.checked === true) {
    inputFour.checked = false;
    inputEight.checked = false;
    return fetch(
      `https://raw.githubusercontent.com/Adalab/cards-data/master/${
        inputSix.value
      }.json`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        saveData(data);
      });
  } else if (inputEight.checked === true) {
    inputSix.checked = false;
    inputFour.checked = false;
    return fetch(
      `https://raw.githubusercontent.com/Adalab/cards-data/master/${
        inputEight.value
      }.json`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        saveData(data);
      });
  }
}

function saveData(data) {
  console.log("Los guardamos en una array");
  for (const item of data) {
    pokemon.push({
      name: item.name,
      image: item.image
    });
  }
  console.log(pokemon);
}
function paintPokemon() {
  console.log("Pintamos el listado segun tamaño de partida, 4, 6 o 8.");
}

function isFaceUp() {
  console.log("");
}
function getClicked() {}

button.addEventListener("click", getDataFromServer);
