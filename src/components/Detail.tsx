import { Box } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

const COLLECTIONS = gql`
  query {
    pokemon {
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
      evolution {
        id
        name
        image
      }
    }
  }
`;

const Detail = () => {
  const { loading, error, data } = useQuery(COLLECTIONS);

  return <Box>{"This is pokemon detail"}</Box>;
};

export default Detail;
