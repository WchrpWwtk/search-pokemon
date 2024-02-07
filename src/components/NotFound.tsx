import { Box } from "@mui/material";
import Image from "next/image";

const NotFound = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>{"Not found"}</h1>
      <Image
        src="/gang_rocket.png"
        alt="Picture of gang rocket"
        width={300}
        height={300}
      />
    </Box>
  );
};

export default NotFound;
