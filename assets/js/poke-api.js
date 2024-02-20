const urlAPI = `https://pokeapi.co/api/v2/pokemon`;

let headersList = {
  Accept: "*/*",
};

const pokeApi = {};

pokeApi.getPokemonsDetails = async (pokemon) => {
  return await fetch(pokemon.url).then((response) => response.json());
};

const modelPokemons = [];

pokeApi.getPokemons = async (offset = 0, limit = 5) => {
  const details = await fetch(urlAPI + `?offset=${offset}&limit=${limit}`, {
    method: "GET",
    headers: headersList,
  })
    .then((result) => result.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
    .then((detailsRequests) => Promise.all(detailsRequests));

  details.map((pokemons) => {
    modelPokemons.push(
      new PokemonData(
        pokemons.id,
        pokemons.name,
        pokemons.types,
        pokemons.sprites.other.home.front_default,
        `https://pokeapi.co/api/v2/pokemon/${pokemons.id}/`
      )
    );
  });
  return modelPokemons;
};

pokeApi.getPokemonOneDetails = async () => {
  const param = getQueryStringParams();
  const pokemon = await fetch(urlAPI + `/${param.id}/`, {
    method: "GET",
    headers: headersList,
  })
    .then((result) => result.json())
    .then((pokemon) => pokemon);

  modelPokemons.push(
    new PokemonDataDetails(
      pokemon.id,
      pokemon.name,
      pokemon.types,
      pokemon.sprites.other.home.front_default,
      `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`
    )
  );
  console.log(modelPokemons[0]);
  return modelPokemons[0];
};
