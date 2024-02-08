"use client";

import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { pokemonEmpty } from "@/data/dataPokemon";
import NotFound from "./NotFound";
import useQueryPokemon from "@/graphql/hooks/pokemon";

const Detail = () => {
  const name = usePathname().replace("/", "");

  const { loading, error, data } = useQueryPokemon(name);

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
