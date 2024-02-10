import useQueryPokemon, { COLLECTIONS } from "@/graphql/hooks/pokemonHook";
import { ApolloError } from "@apollo/client";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { renderHook } from "@testing-library/react";
import { GraphQLError } from "graphql";

export const charmanderData = {
  pokemon: {
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
  },
};

export const successfulCharmanderMock: MockedResponse[] = [
  {
    request: {
      query: COLLECTIONS,
      variables: {
        name: charmanderData.pokemon.name.toLowerCase(),
      },
    },
    result: {
      data: charmanderData,
    },
  },
];

export const erroredCharmanderMock: MockedResponse[] = [
  {
    request: {
      query: COLLECTIONS,
      variables: {
        name: charmanderData.pokemon.name.toLowerCase(),
      },
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError("The fetch was unsuccessful!")],
    }),
  },
];

export const getCharmanderWrapper = (mockData: MockedResponse[] = []) => {
  const wrapper = ({ children }: React.PropsWithChildren) => {
    return (
      <MockedProvider mocks={mockData} addTypename={false}>
        {children}
      </MockedProvider>
    );
  };
  const { result } = renderHook(
    () => useQueryPokemon(charmanderData.pokemon.name.toLowerCase()),
    { wrapper }
  );

  return { result };
};
