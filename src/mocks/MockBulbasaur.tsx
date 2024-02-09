import { pokemonType } from "@/data/dataPokemon";
import useQueryPokemon from "@/graphql/hooks/pokemon";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { renderHook } from "@testing-library/react";

const data: pokemonType = {
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

export function getBulbasaurWrapper(mockData: MockedResponse[] = []) {
  const wrapper = ({ children }: React.PropsWithChildren) => {
    return (
      <MockedProvider mocks={mockData} addTypename={false}>
        {children}
      </MockedProvider>
    );
  };

  const { result } = renderHook(() => useQueryPokemon(data.name), { wrapper });

  return { result };
}

export default data;
