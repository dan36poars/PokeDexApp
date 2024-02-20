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
  constructor(id, name, types, image, url) {
    super(id, name, types, image, url);
    this.description();
  }

  description() {}

  // montar outros detalhes aqui para utilizar na aplicação
}
