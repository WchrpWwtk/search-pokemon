import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

type Pokemons = {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: Array<string>;
  resistant: Array<string>;
  weakness: Array<string>;
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
};