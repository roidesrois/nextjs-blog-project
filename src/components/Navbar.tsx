"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CreateIcon from "@mui/icons-material/Create";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        <ListItem
          component="a"
          onClick={() => router.push("/")}
          sx={{ cursor: "pointer" }}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          component="a"
          onClick={() => router.push("/create")}
          sx={{ cursor: "pointer" }}
        >
          <CreateIcon />
          <ListItemText primary="Write" sx={{ ml: 1 }} />
        </ListItem>
        <ListItem component="a">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem component="a">
          <ListItemText primary="Subscribe" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Apply shadow to AppBar
      }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="a"
            display="flex"
            alignItems="center"
            sx={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Image
              src="/images/logo.jpg"
              alt="Just Ship It"
              width={40}
              height={40}
            />
            <Typography
              color="black"
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                ml: 2,
                display: { xs: "none", sm: "block" },
              }}
            >
              Just Ship It
            </Typography>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 1,
            }}
          >
            <Button
              onClick={() => router.push("/create")}
              startIcon={<CreateIcon />}
              sx={{
                color: "#000",
                textTransform: "none",
                fontWeight: "bold",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for the button
                "&:hover": {
                  backgroundColor: "#f7f7f7",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Larger shadow on hover
                },
              }}
            >
              Write
            </Button>

            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for the button
                "&:hover": {
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Larger shadow on hover
                },
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for the button
                "&:hover": {
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Larger shadow on hover
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
