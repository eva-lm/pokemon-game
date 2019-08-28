"use strict";
const button = document.querySelector(".js-button");
const input = document.querySelectorAll("input");
let pokemon = [];
let pokeUp = [];

function getDataFromServer() {
  console.log("Recogemos los datos de la Api y escuchamos el tamaño clickado");
  pokemon = [];
  pokeUp = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      return fetch(
        `https://raw.githubusercontent.com/Adalab/cards-data/master/${input[i].value}.json`
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
    pokeUp.push({
      name: item.name,
      image: item.image
    });
    pokemon.push({
      image: "https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB"
    });
  }
}

function paintPokemon() {
  const pokemonList = document.querySelector(".js-list");
  let text = "";
  for (let pokemonIndex = 0; pokemonIndex < pokemon.length; pokemonIndex++) {
    text += `<li class="js-li" data-index="${pokemonIndex}">
        <img src="${pokemon[pokemonIndex].image}">
        </li>`;
  }
  pokemonList.innerHTML = text;
  console.log(pokemonList);
  console.log(
    "Recorrremos array pokemon y pintamos el listado segun tamaño de partida, 4, 6 o 8."
  );
}

function listenPokemon() {
  const pokemonItems = document.querySelectorAll(".js-li");
  console.log(pokemonItems);
  for (
    let pokemonIndex = 0;
    pokemonIndex < pokemonItems.length;
    pokemonIndex++
  ) {
    pokemonItems[pokemonIndex].addEventListener("click", getClicked);
  }
  console.log(
    "recorremos el listado que se pinta con los resultados para escucharlos"
  );
}

function getClicked(ev) {
  const index = parseInt(ev.currentTarget.dataset.index);
  const pokemonItems = document.querySelectorAll(".js-li");
  console.log("pokemonItems", pokemonItems);

  listenPokemon();
  paintPokemonUp(index);
  //pokemonGo(index);
}

function paintPokemonUp(index) {
  console.log("poner pokemon dados la vuelta");
  const faceUpList = document.querySelector(".js-list");
  let addText = "";
  for (let i = 0; i < pokeUp.length; i++) {
    if (i === index) {
      addText += `<li class="js-item-faceUp" data-index="${index}">
        <img src="${pokeUp[index].image}">
        <p>${pokeUp[index].name}</p></li>`;
    } else {
      addText += `<li class="js-li" data-index="${i}">
    <img src="${pokemon[i].image}">
    </li>`;
    }
    faceUpList.innerHTML = addText;
  }
  console.log(pokeUp[index]);
  listenPokemon();
}
/* 
function pokemonGo(index) {
  const pokeSelect = pokeUp[index]; //object
  for (const pokeball of pokeUp) {
    if (pokeball === pokeSelect) {
      paintPokemonUp(index);
    }
  }
  return false;
} */

button.addEventListener("click", getDataFromServer);
