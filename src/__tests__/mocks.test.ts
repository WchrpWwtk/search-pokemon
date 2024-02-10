import {
  bulbasaurData,
  erroredBulbasaurMock,
  getBulbasaurWrapper,
  successfulBulbasaurMock,
} from "@/mocks/Bulbasaur";
import {
  charmanderData,
  erroredCharmanderMock,
  getCharmanderWrapper,
  successfulCharmanderMock,
} from "@/mocks/Charmander";
import {
  erroredSquirtleMock,
  getSquirtleWrapper,
  squirtleData,
  successfulSquirtleMock,
} from "@/mocks/Squirtle";
import { ApolloError } from "@apollo/client";
import { cleanup, waitFor } from "@testing-library/react";
import { GraphQLError } from "graphql";

describe("useQueryPokemon Hook when successful", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be defined and then return correct Bulbasaur data", async () => {
    const { result } = getBulbasaurWrapper(successfulBulbasaurMock);

    expect(result).toBeDefined();
    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        error: undefined,
        data: bulbasaurData,
      });

      expect(result.current.data.pokemon.types).toEqual(
        bulbasaurData.pokemon.types
      );
    });
  });

  it("should be defined and then return correct Charmander data", async () => {
    const { result } = getCharmanderWrapper(successfulCharmanderMock);

    expect(result).toBeDefined();
    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        error: undefined,
        data: charmanderData,
      });

      expect(result.current.data.pokemon.types).toEqual(
        charmanderData.pokemon.types
      );
    });
  });

  it("should be defined and then return correct Squirtle data", async () => {
    const { result } = getSquirtleWrapper(successfulSquirtleMock);

    expect(result).toBeDefined();
    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        error: undefined,
        data: squirtleData,
      });

      expect(result.current.data.pokemon.types).toEqual(
        squirtleData.pokemon.types
      );
    });
  });
});

describe("useQueryPokemon Hook when it errors", () => {
  afterEach(() => {
    cleanup();
  });

  const cases = [
    getBulbasaurWrapper(erroredBulbasaurMock),
    getCharmanderWrapper(erroredCharmanderMock),
    getSquirtleWrapper(erroredSquirtleMock),
  ];

  it.each(cases)(
    "should be defined and then return error",
    async ({ result }) => {
      expect(result).toBeDefined();

      await waitFor(() => {
        expect(result.current).toEqual({
          loading: false,
          error: new ApolloError({
            graphQLErrors: [new GraphQLError("The fetch was unsuccessful!")],
          }),
          data: undefined,
        });
      });
    }
  );
});
