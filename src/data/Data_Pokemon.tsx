type skillType = {
  name: string;
  type: string;
  damage: number;
};

type attacksType = {
  fast: Array<skillType>;
  special: Array<skillType>;
};

type evolutionType = {
  name: string;
  image: string;
};

export type pokemonType = {
  name: string;
  types: Array<string>;
  image: string;
  attacks: attacksType;
  evolutions: Array<evolutionType>;
};

export const pokemonEmpty = {
  name: "",
  types: [],
  image: "",
  attacks: {
    fast: [],
    special: [],
  },
  evolutions: [],
};
