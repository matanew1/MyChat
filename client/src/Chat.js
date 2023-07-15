import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Profile from "./Profile.js";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <Grid container direction="column" height="100%">
      <Grid item>
        <Profile username={username} room={room} />
      </Grid>
      <Grid item xs>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
            <Typography variant="h5" align="center">
              Live Chat
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
            {messageList.map((messageContent) => (
              <Box
                key={messageContent.room}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    username === messageContent.author
                      ? "flex-end"
                      : "flex-start",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    maxWidth: "60%",
                    p: 2,
                    borderRadius: 4,
                    backgroundColor:
                      username === messageContent.author
                        ? "#DCF8C6"
                        : "#FFFFFF",
                    boxShadow: 1,
                  }}
                >
                  <Typography>{messageContent.message}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      username === messageContent.author
                        ? "flex-end"
                        : "flex-start",
                  }}
                >
                  <Typography variant="caption" sx={{ mr: 1 }}>
                    {messageContent.time}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                    {messageContent.author}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{ p: 2, borderTop: 1, borderColor: "divider", display: "flex" }}
          >
            <TextField
              value={currentMessage}
              placeholder="Hey..."
              variant="outlined"
              fullWidth
              onChange={(event) => setCurrentMessage(event.target.value)}
              onKeyPress={(event) => event.key === "Enter" && sendMessage()}
              sx={{ mr: 1 }}
            />
            <Button
              variant="contained"
              onClick={sendMessage}
              sx={{ minWidth: "40px", width: "40px", height: "40px", p: 0 }}
            >
              &#9658;
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chat;
