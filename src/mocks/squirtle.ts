import { pokemonType } from "@/data/dataPokemon";

export default class Squirtle {
  data: pokemonType = {
    name: "Squirtle",
    types: ["Water"],
    image: "https://img.pokemondb.net/artwork/squirtle.jpg",
    attacks: {
      fast: [
        {
          name: "Bubble",
          type: "Water",
          damage: 25,
        },
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
      ],
      special: [
        {
          name: "Aqua Jet",
          type: "Water",
          damage: 25,
        },
        {
          name: "Aqua Tail",
          type: "Water",
          damage: 45,
        },
        {
          name: "Water Pulse",
          type: "Water",
          damage: 35,
        },
      ],
    },
    evolutions: [
      {
        name: "Wartortle",
        image: "https://img.pokemondb.net/artwork/wartortle.jpg",
      },
      {
        name: "Blastoise",
        image: "https://img.pokemondb.net/artwork/blastoise.jpg",
      },
    ],
  };
}
