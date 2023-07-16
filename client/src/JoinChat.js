import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Chat from "./Chat";
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
      </Container>
    </Box>
  );
};

export default JoinChat;
