import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const JoinChat = ({
  setJoined,
  username,
  setUsername,
  room,
  setRoom,
  socket,
}) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      setJoined(true);
      socket.emit("join_room", room);
      navigate(`/chat/${room}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            backdropFilter: "blur(10px)", // Apply the blur effect
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Make the card transparent
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
            borderRadius: "10px", // Round the corners
            padding: "20px", // Add some padding
          }}
        >
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" align="center">
                Join A Chat
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Username"
                placeholder="Username..."
                variant="outlined"
                onChange={(event) => setUsername(event.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Room ID"
                placeholder="Room ID..."
                variant="outlined"
                onChange={(event) => setRoom(event.target.value)}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" onClick={joinRoom}>
                Join A Room
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default JoinChat;
