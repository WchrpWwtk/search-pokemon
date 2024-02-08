import { pokemonType } from "@/data/dataPokemon";

export default class Bulbasaur {
  data: pokemonType = {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    attacks: {
      fast: [
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
    evolutions: [
      {
        name: "Ivysaur",
        image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
      },
      {
        name: "Venusaur",
        image: "https://img.pokemondb.net/artwork/venusaur.jpg",
      },
    ],
  };
}
