import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  // State for menu anchor element
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Event handler for opening the menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler for closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const headerText = "MaChatApp";
  const mailto = "mailto:matanew1@gmail.com";
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        {/* Grid container to structure the header */}
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            spacing={1}
          >
            <Grid item>
              <Box display="flex" alignItems="center" gap="20px">
                {/* Text label */}
                <Typography
                  variant="h6"
                  component="h1"
                  color="white"
                  fontWeight="bold"
                >
                  {headerText}
                </Typography>
              </Box>
            </Grid>
            {/* Menu items */}
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <Button href="/" style={{ fontWeight: "bold", color: "white" }}>
                Home
              </Button>
              <Button
                href={mailto}
                style={{ fontWeight: "bold", color: "white" }}
              >
                Contact
              </Button>
            </Grid>
            {/* Hamburger menu */}
            <Grid item sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                style={{ fontWeight: "bold", color: "white" }}
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              {/* Menu component */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {/* Menu items */}
                <MenuItem to="/" onClick={handleMenuClose}>
                  Home
                </MenuItem>
                <MenuItem to={mailto} onClick={handleMenuClose}>
                  Contact
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
