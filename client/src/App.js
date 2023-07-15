import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { io } from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
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
      {!showChat ? (
        <Container maxWidth="sm">
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" align="center">
              Join A Chat
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Username"
              placeholder="John..."
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
        </Container>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </Box>
  );
};

export default App;
