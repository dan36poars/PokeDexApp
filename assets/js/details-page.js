const pokemonHeader = document.querySelector(".pokemon-info-details");
const imageHeader = document.querySelector(".pokemon-img-details");
const bgImage = document.querySelector(".bg-details");
const about = document.querySelector("#about");
const baseStats = document.querySelector("#base-stats");

pokeApi.getPokemonOneDetails().then((pokemonsDetails) => {
  console.log(pokemonsDetails);
  bgImage.classList.remove("bg-details-grass");
  bgImage.classList.add(`bg-details-${pokemonsDetails.getTypeClass()}`);
  pokemonHeader.innerHTML = templateHTMLDetailsHeader(pokemonsDetails);
  imageHeader.innerHTML = templateHTMLImageHeader(pokemonsDetails);
  about.innerHTML = templateHTMLabout(pokemonsDetails);
  baseStats.innerHTML = templateHTMLBaseStats(pokemonsDetails);
});
