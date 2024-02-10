import useQueryPokemon, { COLLECTIONS } from "@/graphql/hooks/pokemon";
import { ApolloError } from "@apollo/client";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { renderHook } from "@testing-library/react";
import { GraphQLError } from "graphql";

export const squirtleData = {
  pokemon: {
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
  },
};

export const successfulSquirtleMock: MockedResponse[] = [
  {
    request: {
      query: COLLECTIONS,
      variables: {
        name: squirtleData.pokemon.name.toLowerCase(),
      },
    },
    result: {
      data: squirtleData,
    },
  },
];

export const erroredSquirtleMock: MockedResponse[] = [
  {
    request: {
      query: COLLECTIONS,
      variables: {
        name: squirtleData.pokemon.name.toLowerCase(),
      },
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError("The fetch was unsuccessful!")],
    }),
  },
];

export const getSquirtleWrapper = (mockData: MockedResponse[] = []) => {
  const wrapper = ({ children }: React.PropsWithChildren) => {
    return (
      <MockedProvider mocks={mockData} addTypename={false}>
        {children}
      </MockedProvider>
    );
  };
  const { result } = renderHook(
    () => useQueryPokemon(squirtleData.pokemon.name.toLowerCase()),
    { wrapper }
  );

  return { result };
};
