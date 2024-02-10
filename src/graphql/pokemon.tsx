import { gql, useQuery } from "@apollo/client";

export const COLLECTIONS = gql`
  query ($name: String!) {
    pokemon(name: $name) {
      name
      types
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`;

const useQueryPokemon = (name: string) => {
  const { loading, error, data } = useQuery(COLLECTIONS, {
    variables: {
      name: name,
    },
  });

  return { loading, error, data };
};

export default useQueryPokemon;
