import { pokemonType } from "@/data/dataPokemon";
import useQueryPokemon from "@/graphql/hooks/pokemon";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { renderHook } from "@testing-library/react";

const data: pokemonType = {
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

export function getCharmanderWrapper(mockData: MockedResponse[] = []) {
  const wrapper = ({ children }: React.PropsWithChildren) => {
    return (
      <MockedProvider mocks={mockData} addTypename={false}>
        {children}
      </MockedProvider>
    );
  };

  const {result} = renderHook(() => useQueryPokemon(data.name), { wrapper });

  return { result };
}

export default data;
