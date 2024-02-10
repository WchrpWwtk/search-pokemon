/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { pokemonEmpty, skillType } from "@/data/dataPokemon";
import NotFound from "./NotFound";
import useQueryPokemon from "@/graphql/hooks/pokemon";
import PokemonAvatar from "./PokemonAvatar";
import { ExpandMoreOutlined } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Detail = () => {
  const name = usePathname().replace("/", "");

  const { loading, error, data } = useQueryPokemon(name);

  const [pokemon, setPokemon] = useState(pokemonEmpty);
  const [component, setComponent] = useState(<></>);
  const [expandSkills, setExpandSkills] = useState(false);
  const [expandEvolutions, setExpandEvolutions] = useState(false);

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (expand: string) => {
    switch (expand) {
      case "skills": {
        setExpandSkills(!expandSkills);
        break;
      }
      case "evolutions": {
        setExpandEvolutions(!expandEvolutions);
        break;
      }
      default: {
        break;
      }
    }
  };

  const buildAttacks = () => {
    if (pokemon.attacks) {
      const fast = pokemon.attacks.fast ? (
        pokemon.attacks.fast.map((attack: skillType, index) => {
          return (
            <CardContent key={`fast-${index}`}>
              <Typography variant="h5" component="div">
                {attack.name}
              </Typography>
              <Typography
                variant="h6"
                component="div"
              >{`type: ${attack.type}`}</Typography>
              <Typography
                variant="h6"
                component="div"
              >{`damage: ${attack.damage}`}</Typography>
            </CardContent>
          );
        })
      ) : (
        <></>
      );

      const special = pokemon.attacks.special ? (
        pokemon.attacks.special.map((attack: skillType, index) => {
          return (
            <CardContent key={`special-${index}`}>
              <Typography variant="h5" component="div">
                {attack.name}
              </Typography>
              <Typography
                variant="h6"
                component="div"
              >{`type: ${attack.type}`}</Typography>
              <Typography
                variant="h6"
                component="div"
              >{`damage: ${attack.damage}`}</Typography>
            </CardContent>
          );
        })
      ) : (
        <></>
      );

      return (
        <CardContent>
          <Typography variant="h4" component="div">
            {"Fast attack"}
          </Typography>
          {fast}
          <Typography variant="h4" component="div">
            {"Special attack"}
          </Typography>
          {special}
        </CardContent>
      );
    } else {
      return <></>;
    }
  };

  const buildEvolutions = () => {
    if (pokemon.evolutions) {
      const evolutions = pokemon.evolutions.map((evolution, index) => {
        return <PokemonAvatar key={`evolution-${index}`} data={evolution} />;
      });

      return (
        <CardContent sx={{ width: "100%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {"Evolutions"}
            <ExpandMore
              name="evolutions"
              expand={expandEvolutions}
              onClick={(event) => {
                const name = event.currentTarget.name;
                handleExpandClick(name);
              }}
              aria-expanded={expandEvolutions}
              aria-label="show evolutions"
            >
              <ExpandMoreOutlined />
            </ExpandMore>
          </Typography>
          <Collapse in={expandEvolutions} timeout="auto" unmountOnExit>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {evolutions}
            </CardContent>
          </Collapse>
        </CardContent>
      );
    } else {
      return <></>;
    }
  };

  const buildComponent = () => {
    return pokemon ? (
      <Box>
        <Card sx={{ minWidth: 325, maxWidth: 800, width: "100%" }}>
          <CardHeader
            title={pokemon.name}
            subheader={pokemon.types ? pokemon.types.toString() : ""}
          />
          <CardMedia
            component={"img"}
            sx={{ height: "auto" }}
            image={pokemon.image}
            title={pokemon.name}
          />
          <CardContent>{buildAttacks()}</CardContent>
          <CardActions disableSpacing>{buildEvolutions()}</CardActions>
        </Card>
      </Box>
    ) : (
      <CircularProgress />
    );
  };

  useEffect(() => {
    if (data) {
      const { pokemon } = data;

      setPokemon(pokemon);
    }
  }, [data, error]);

  useEffect(() => {
    pokemon && pokemon !== pokemonEmpty
      ? setComponent(buildComponent())
      : setComponent(<NotFound />);
  }, [pokemon]);

  useEffect(() => {
    setComponent(buildComponent());
  }, [expandSkills, expandEvolutions]);

  return <Box>{loading ? <CircularProgress /> : component}</Box>;
};

export default Detail;
