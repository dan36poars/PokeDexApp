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
