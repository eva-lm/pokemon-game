"use strict";
const button = document.querySelector(".js-button");
const input = document.querySelectorAll("input");
let pokemon = [];

function getDataFromServer() {
  console.log("Recogemos los datos de la Api y escuchamos el tamaño clickado");
  pokemon = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      return fetch(
        `https://raw.githubusercontent.com/Adalab/cards-data/master/${
          input[i].value
        }.json`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          saveData(data);
          paintPokemon();
          listenPokemon();
        });
    }
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
}

function paintPokemon() {
  const pokemonList = document.querySelector(".js-list");
  let text = "";
  for (let pokemonIndex = 0; pokemonIndex < pokemon.length; pokemonIndex++) {
    text += `<li class="js-li">
        <img src="${pokemon[pokemonIndex].image}">
        <p>${pokemon[pokemonIndex].name}</p>
        </li>`;
  }
  pokemonList.innerHTML = text;
  console.log(pokemonList);
  console.log("Pintamos el listado segun tamaño de partida, 4, 6 o 8.");
}

function listenPokemon() {
  const pokemonItems = document.querySelectorAll(".js-li");
  console.log(pokemonItems);
  for (let pokemonIndex = 0; pokemonIndex < 0; pokemonIndex++) {
    pokemonItems[pokemonIndex].addEventListener("click", getClicked);
  }
  console.log(
    "recogemos todo el listado que se pinta con los resultados para escucharlos"
  );
}

function getClicked(ev) {
  const pokemonCurrentTarjet = ev.currentTarjet.pokemonCurrentTarjet;

  console.log();
}

function isFaceUp() {
  console.log("");
}

button.addEventListener("click", getDataFromServer);
