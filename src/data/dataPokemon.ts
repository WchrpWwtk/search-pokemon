export type skillType = {
  name: string;
  type: string;
  damage: number;
};

export type attacksType = {
  fast: skillType[];
  special: skillType[];
};

export type evolutionType = {
  name: string;
  image: string;
};

export type pokemonType = {
  name: string;
  types: string[];
  image: string;
  attacks: attacksType;
  evolutions: evolutionType[];
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
