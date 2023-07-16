import * as React from "react";
import { AppBar, Toolbar, Button, TextField, Typography } from "@mui/material";

const Header = ({ joined }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          MaChatApp
        </Typography>
        <Button href="/" color="inherit">
          Home
        </Button>
        {!joined && (
          <Button href="/join" color="inherit">
            Join Chat
          </Button>
        )}
        <Button href="mailto:matanew1@gmail.com" color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
