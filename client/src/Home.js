import * as React from "react";
import { Button, Grid, Card, CardContent, Typography } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      spacing={12}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backdropFilter: "blur(10px)", // Apply the blur effect
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Make the card transparent
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
            borderRadius: "10px", // Round the corners
            padding: "50px", // Add some padding
            height: "100%", // Make the card fill its parent container
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Welcome to Chat App!
            </Typography>
            <Typography variant="body2">
              Start a conversation or join an existing one.
            </Typography>
          </CardContent>
          <Button
            href="/join"
            variant="outlined"
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Add a background color on hover
              },
            }}
          >
            Start
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backdropFilter: "blur(10px)", // Apply the blur effect
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Make the card transparent
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
            borderRadius: "10px", // Round the corners
            padding: "50px", // Add some padding
            height: "100%", // Make the card fill its parent container
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Advertisements
            </Typography>
            <Typography variant="body2">
              Discover our sponsors and their offerings.
            </Typography>
          </CardContent>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Add a background color on hover
              },
            }}
          >
            Learn More
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
