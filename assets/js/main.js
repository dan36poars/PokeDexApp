const pokemonOlList = document.querySelector(".pokemon-list");
const btnLoadMore = document.querySelector("#btnLoadMore");
const pagination = document.querySelector(".pagination");

const limit = 10;
let page = 0;

const maxRecords = 151;

function loadPokemon(page, limit) {
  pokeApi
    .getPokemons(page, limit)
    .then((pokemonsList) => {
      pokemonOlList.innerHTML = pokemonsList.map(templateHTMLLi).join("");
    })
    .catch((err) => console.error(err));
}

loadPokemon(page, limit);
