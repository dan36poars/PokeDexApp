class PokemonData {
  constructor(id, name, types, image, url) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.image = image;
    this.url = url;
  }

  getTypeClass() {
    return this.types[0].type.name;
  }
}

class PokemonDataDetails extends PokemonData {
  detailsComponent = {};
  constructor(id, name, types, image, url) {
    super(id, name, types, image, url);
  }

  async getAbilityEffectEntry(url) {
    try {
      const description = await fetch(url, {
        method: "GET",
        headers: headersList,
      }).then((result) => result.json());

      this.detailsComponent.effect_entries =
        description.effect_entries[1].effect;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async populateStats(populate, pokemons) {
    for (const element of pokemons) {
      populate.push({
        name: element.stat.name,
        base: element.base_stat,
      });
    }
  }

  async getSumStats(stats) {
    return stats.reduce((total, { base }) => total + base, 0);
  }

  async getDetails() {
    try {
      const details = await fetch(this.url, {
        method: "GET",
        headers: headersList,
      });

      const pokemon = await details.json();

      const specie = await fetch(pokemon.species.url, {
        method: "GET",
        headers: headersList,
      });

      const speciePokemon = await specie.json();

      this.detailsComponent.abilities = pokemon.abilities;
      this.detailsComponent.specie = pokemon.species.name;

      this.detailsComponent.height = pokemon.height;
      this.detailsComponent.weight = pokemon.weight;

      this.detailsComponent.genre = speciePokemon.gender_rate;
      this.detailsComponent.egg_groups = speciePokemon.egg_groups;
      this.detailsComponent.egg_cycle = speciePokemon.hatch_counter;

      this.detailsComponent.stats = [];

      this.populateStats(this.detailsComponent.stats, pokemon.stats);

      this.detailsComponent.total = await this.getSumStats(
        this.detailsComponent.stats
      );
    } catch (error) {
      throw new Error("Error: " + error);
    }
  }

  async getDetailsComponent() {
    await this.getDetails();
    await this.getAbilityEffectEntry(
      `https://pokeapi.co/api/v2/ability/${this.id}`
    );
    return this.detailsComponent;
  }
}
