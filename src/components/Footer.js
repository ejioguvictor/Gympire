import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <Typography variant="h7" color="#000" display="flex" alignItems="end" gap="5px" marginBottom="24px">
          Designed with ♥️ by{" "}
          <a
            href="https://www.linkedin.com/in/ejioguvictorC/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "green",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",

            }}
          >
            Victor_Ejiogu {""}
            <LinkedInIcon sx={{ fontSize: "24px", color: "#0b66c2" }} />
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;