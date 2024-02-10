"use client";

import { evolutionType } from "@/data/dataPokemon";
import { Avatar, Button, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";

type PokemonAvatarProps = {
  data: evolutionType;
};

const PokemonAvatar = ({ data }: PokemonAvatarProps) => {
  const router = useRouter();

  return (
    <Tooltip title={data.name}>
      <Button onClick={(_) => router.push(`/${data.name.toLowerCase()}`)}>
        <Avatar
          sx={{ width: 80, height: 80 }}
          alt={data.name}
          src={data.image}
        />
      </Button>
    </Tooltip>
  );
};

export default PokemonAvatar;
