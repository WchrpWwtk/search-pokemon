"use client";

import { Box, CircularProgress } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { pokemonEmpty } from "@/data/Data_Pokemon";

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

  useEffect(() => {
    if (data) {
      const { pokemon } = data;

      setPokemon(pokemon);
    } else {
      console.log(error);
    }
  }, [data, error]);

  useEffect(() => {
    if (pokemon !== pokemonEmpty) {
      console.log(pokemon);
    }
  }, [pokemon]);

  return (
    <Box>
      {loading ? <CircularProgress /> : <h1>{"This is pokemon detail"}</h1>}
    </Box>
  );
};

export default Detail;
