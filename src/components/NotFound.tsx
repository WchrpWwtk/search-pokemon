import { Box, Typography } from "@mui/material";
import Image from "next/image";

const NotFound = () => {
  return (
    <Box sx={{ display: "grid", textAlign: "center", gap: 2 }}>
      <Typography variant="h3" component="div">
        {"Not Found"}
      </Typography>
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
