import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";

import Image from "next/image";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#9d9ca0",
        backgroundImage: `url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          color: "white",
        }}
      >
        {/* <Image
          src="/images/logo.jpg"
          alt="Just Ship It"
          width={80}
          height={80}
          layout="intrinsic"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wCEAAkGBxMTEhUTExMVFhUXGR4bGBgYGBsdHxkcHhgYHhobHR0bICggIB4lHRgaIjEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGyslICYrLTcrNy0rKysrKysrKystKy0tKy0rKy0rKy0tKy0rKystKy0rKy0rKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABOEAABAwIEAwYDBAYFBwUBAAABAgMEAAURBhIhMUFRBxMiMmGBFDKBkaEUweFCU1JicoKS0fAVFiMzNVVjkpKSk7LTo8QXFiZDc4PlNHWz0jZXRyQoQnT/2gAMAwEAAhEDEQA/AOPMLhtQpqvErcrRWymuRT0+LtIjQdb+x9rlXb7h6TSUVsb9exzTTJpGkpJ6Tp6Vh8TxndlbT5k6TWxd7F3GhqxL2m9pcfSdQoVK5qTTmnB1fBBUlWjrxxkADjCQCcIycZKoBv/Z"
          style={{
            borderRadius: "50%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        /> */}

        <Typography
          variant="h2"
          component="div"
          sx={{
            mt: 2,
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "3.5rem" },
          }}
        >
          Just Ship It
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            mt: 2,
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.25rem" },
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          Your Saturday issue to find startup ideas, launch fast, and get
          profitable. Join 20,000+ solopreneurs.
        </Typography>

        <Container maxWidth="xs" sx={{ mt: 4 }}>
          <form>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        height: "100%",
                        borderRadius: "0 8px 8px 0",
                        textTransform: "none",
                        color: "#fff",
                        fontWeight: "bold",
                        backgroundColor: "#1976d2",
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                      }}
                    >
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "white",
                  borderRadius: "8px",
                  paddingRight: 0,
                },
              }}
              inputProps={{
                sx: {
                  paddingTop: "12.1px",
                  paddingBottom: "12.1px",
                },
              }}
            />
          </form>
        </Container>
      </Container>
    </Box>
  );
};

export default Header;
