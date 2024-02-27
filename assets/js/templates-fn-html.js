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
      <a href="detail-page.html?id=${
        pokemon.id
      }"><li class="pokemon-card ${pokemon.getTypeClass()}">
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
      </li></a>`;
};

const finalMessage = (pagination) => {
  pagination.innerHTML = `<div class="FinalMessage"><p>Limite Máximo do Pokedex App!</p></div>`;
};

// Template for details-page

const templateHTMLDetailsHeader = (pokemonDetails) => {
  return `<div class="pokemon-descriptions">
          <p>${pokemonDetails.name}</p>
          ${templateHTMLSpanPokemonTypes(pokemonDetails.types)}
          </div>
          <div class="pokemon-number-details">
          <span>#${pokemonDetails.id}</span>
          </div>`;
};

const templateHTMLImageHeader = (pokemonDetails) => {
  return `<img src="${pokemonDetails.image}"
  alt="${pokemonDetails.name}">`;
};

const templateHTMLAbilities = (abilities) => {
  const stringAbilities = abilities
    .map(({ ability }) => ability.name)
    .join(", ");
  return `<span class="pokemon-tab-data">${stringAbilities}</span>`;
};

const templateHTMLGenre = (genre) => {
  const probGenreFemale = (genre / 8) * 100;
  const probGenreMale = ((8 - genre) / 8) * 100;

  return probGenreFemale === -1
    ? `<span class="pokemon-tab-data">without genre</span>`
    : `<span class="pokemon-tab-data"><i class="fa-solid fa-mars"></i>${probGenreMale}<i class="fa-solid fa-mercury"></i>${probGenreFemale}</span>`;
};

const templateHTMLEggGroup = (eggGroup) => {
  const eggs = eggGroup.map(({ name }) => name).join(", ");
  return `<span class="pokemon-tab-data">${eggs}</span>`;
};

const templateHTMLEggCycle = (eggCycle) => {
  return `<span class="pokemon-tab-data">${eggCycle}</span>`;
};

const templateHTMLStats = (stats) => {
  return stats
    .map((stat) => {
      return `<div class="content-flex">
        <div class="pokemon-data">
            <span class="pokemon-tab-head">${stat.name}</span>
            <span class="pokemon-tab-data" id="percentLabel">${
              stat.base
            }%</span>
        </div>
        <div class="section-percentage-level">
            <div style="width: ${stat.base}%" class="pokemon-percentage-line ${
        stat.base < 60 ? "red" : "green"
      }" id="percentLine"></div>
        </div>
      </div>`;
    })
    .join("");
};

const templateHTMLSumTotal = (total) => {
  return `<div class="content-flex">
            <div class="pokemon-data">
                <span class="pokemon-tab-head">Total</span>
                <span class="pokemon-tab-data" id="percentLabel">${total}</span>
            </div>
            <div class="section-percentage-level">
                <div style="width: ${
                  (total / 100) * 10
                }%" class="pokemon-percentage-line ${
    total < 220 ? "red" : "green"
  }" id="percentLine"></div>
            </div>
          </div>`;
};

const templateHTMLDescriptionEffectEntry = (effect) => {
  return `<span class="pokemon-tab-data gray">${effect}</span>`;
};

const templateHTMLabout = (pokemonDetails) => {
  return `<div class="pokemon-details-info">
  <span class="pokemon-tab-head">Species</span>
  <span class="pokemon-tab-data">${
    pokemonDetails.detailsComponent.specie
  }</span>
</div>
<div class="pokemon-details-info">
  <span class="pokemon-tab-head">Height</span>
  <span class="pokemon-tab-data">${
    pokemonDetails.detailsComponent.height
  }</span>
</div>
<div class="pokemon-details-info">
  <span class="pokemon-tab-head">Weight</span>
  <span class="pokemon-tab-data">${
    pokemonDetails.detailsComponent.weight
  }</span>
</div>
<div class="pokemon-details-info">
  <span class="pokemon-tab-head">Abilities</span>
  ${templateHTMLAbilities(pokemonDetails.detailsComponent.abilities)}
</div>
<div class="pokemon-section">
  <div class="pokemon-section-title">
      <p>Breeding</p>
  </div>
  <div class="pokemon-data">
      <span class="pokemon-tab-head">Gender</span>
      ${templateHTMLGenre(pokemonDetails.detailsComponent.genre)}
  </div>
  <div class="pokemon-data">
      <span class="pokemon-tab-head">Egg Group</span>
      ${templateHTMLEggGroup(pokemonDetails.detailsComponent.egg_groups)}
  </div>
  <div class="pokemon-data">
      <span class="pokemon-tab-head">Egg Cycle</span>
      ${templateHTMLEggCycle(pokemonDetails.detailsComponent.egg_cycle)}
  </div>
</div>
`;
};

const templateHTMLBaseStats = (pokemonDetails) => {
  return `${templateHTMLStats(pokemonDetails.detailsComponent.stats)}
          ${templateHTMLSumTotal(pokemonDetails.detailsComponent.total)}
          <div class="pokemon-section">
            <div class="pokemon-section-title">
                <p>Ability Effect</p>
            </div>
            <div class="pokemon-data">
                ${templateHTMLDescriptionEffectEntry(
                  pokemonDetails.detailsComponent.effect_entries
                )}
            </div>
          </div>`;
};
