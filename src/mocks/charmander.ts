import { pokemonType } from "@/data/dataPokemon";

export default class Charmander {
  data: pokemonType = {
    name: "Charmander",
    types: ["Fire"],
    image: "https://img.pokemondb.net/artwork/charmander.jpg",
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Flame Burst",
          type: "Fire",
          damage: 30,
        },
        {
          name: "Flame Charge",
          type: "Fire",
          damage: 25,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
    evolutions: [
      {
        name: "Charmeleon",
        image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
      },
      {
        name: "Charizard",
        image: "https://img.pokemondb.net/artwork/charizard.jpg",
      },
    ],
  };
}
