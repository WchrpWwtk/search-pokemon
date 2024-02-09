import { pokemonType } from "@/data/dataPokemon";
import useQueryPokemon from "@/graphql/hooks/pokemon";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { renderHook } from "@testing-library/react";

const data: pokemonType = {
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

export function getSquirtleWrapper(mockData: MockedResponse[] = []) {
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
