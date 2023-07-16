import * as React from "react";
import { Button, Grid, Card, CardContent, Typography } from "@mui/material";
import { Chat as ChatIcon, People as PeopleIcon } from "@mui/icons-material";

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
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
          <Button variant="contained" color="primary">
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
          }}
        >
          <CardContent>
            <ChatIcon fontSize="large" />
            <Typography variant="h6" component="div">
              Start Chatting
            </Typography>
            <Typography variant="body2">
              Connect with people and have meaningful conversations.
            </Typography>
          </CardContent>
          <Button variant="contained" color="primary">
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
          }}
        >
          <CardContent>
            <PeopleIcon fontSize="large" />
            <Typography variant="h6" component="div">
              Join a Group
            </Typography>
            <Typography variant="body2">
              Collaborate with like-minded individuals in groups.
            </Typography>
          </CardContent>
          <Button variant="contained" color="primary">
            Join
          </Button>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
          <Button variant="outlined" color="primary">
            Learn More
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
