import useQueryPokemon, { COLLECTIONS } from "@/graphql/hooks/pokemonHook";
import { ApolloError } from "@apollo/client";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { renderHook } from "@testing-library/react";
import { GraphQLError } from "graphql";
import React from "react";

export const bulbasaurData = {
  pokemon: {
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
  },
};

export const successfulBulbasaurMock: MockedResponse[] = [
  {
    request: {
      query: COLLECTIONS,
      variables: {
        name: bulbasaurData.pokemon.name.toLowerCase(),
      },
    },
    result: {
      data: bulbasaurData,
    },
  },
];

export const erroredBulbasaurMock: MockedResponse[] = [
  {
    request: {
      query: COLLECTIONS,
      variables: {
        name: bulbasaurData.pokemon.name.toLowerCase(),
      },
    },
    error: new ApolloError({
      graphQLErrors: [new GraphQLError("The fetch was unsuccessful!")],
    }),
  },
];

export const getBulbasaurWrapper = (mockData: MockedResponse[] = []) => {
  const wrapper = ({ children }: React.PropsWithChildren) => {
    return (
      <MockedProvider mocks={mockData} addTypename={false}>
        {children}
      </MockedProvider>
    );
  };
  const { result } = renderHook(
    () => useQueryPokemon(bulbasaurData.pokemon.name.toLowerCase()),
    { wrapper }
  );

  return { result };
};
