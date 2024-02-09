import bulbasaur from "@/mocks/MockBulbasaur";
import charmander from "@/mocks/MockCharmander";
import squirtle from "@/mocks/MockSquirtle";
import { pokemonType } from "@/data/dataPokemon";

import { cleanup } from '@testing-library/react';
import { COLLECTIONS } from "@/graphql/hooks/pokemon";

const pokemons: pokemonType[] = [bulbasaur, charmander, squirtle];



describe("Compare types of Pokemon between mock and response from query", () => {
  afterEach(() => {
    cleanup();
  });

  test.each(pokemons)(
    "Pokemon types between mock and query must equal",
    async (pokemon) => {
      const queryData = {
        query: COLLECTIONS,
        variables: { name: pokemon.name}
      }

      let server, url;
    }
  );
});
