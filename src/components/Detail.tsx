"use client";

import { Box, CircularProgress } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { pokemonEmpty } from "@/data/Data_Pokemon";
import NotFound from "./NotFound";

const COLLECTIONS = gql`
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

const Detail = () => {
  const name = usePathname().replace("/", "");

  const { loading, error, data } = useQuery(COLLECTIONS, {
    variables: {
      name: name,
    },
  });

  const [pokemon, setPokemon] = useState(pokemonEmpty);
  const [component, setComponent] = useState(<></>);

  useEffect(() => {
    if (data) {
      const { pokemon } = data;

      setPokemon(pokemon);
    }
  }, [data, error]);

  useEffect(() => {
    pokemon && pokemon !== pokemonEmpty
      ? setComponent(<h1>{`You found ${pokemon.name}`}</h1>)
      : setComponent(<NotFound />);
  }, [pokemon]);

  return <Box>{loading ? <CircularProgress /> : component}</Box>;
};

export default Detail;
