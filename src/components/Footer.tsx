import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #1565c0, #1976d2)",
        color: "white",
        textAlign: "center",
        padding: "2rem 0",
        width: "100%",
        boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={2}>
          <Grid>
            <IconButton href="#" sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton href="#" sx={{ color: "white" }}>
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton href="#" sx={{ color: "white" }}>
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 2 }}>
          &copy; {new Date().getFullYear()} Just Ship It
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Launch fast, grow fast, and enjoy the journey with us!
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
