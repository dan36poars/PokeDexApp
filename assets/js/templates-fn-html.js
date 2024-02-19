const templateHTMLImgPokemon = (pokemonImages, pokemonName) => {
  return `<img src="${pokemonImages}" alt="${pokemonName}">`;
};

const templateHTMLSpanPokemonTypes = (pokemonTypes) => {
  return pokemonTypes
    .map(
      (types) => `<span class="${types.type.name}">${types.type.name}</span>`
    )
    .join("");
};

const templateHTMLLi = (pokemon) => {
  return `
      <li class="pokemon-card ${pokemon.getTypeClass()}">
        <span class="pokemon-number">#${pokemon.id}</span>
        <p>${pokemon.name}</p>
        <div class="pokemon-info">
            <div class="pokemon-details">
                ${templateHTMLSpanPokemonTypes(pokemon.types)}
            </div>
            <div class="pokemon-img">
              ${templateHTMLImgPokemon(
                pokemon.image,
                pokemon.name
              )}             
            </div>
        </div>
      </li>`;
};

const finalMessage = (pagination) => {
  pagination.innerHTML = `<div class="FinalMessage"><p>Limite Máximo do Pokedex App!</p></div>`;
};
