import React, { useState } from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Message = ({ messageContent, username }) => {
  const isAuthor = username === messageContent.sender;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: isAuthor ? "flex-end" : "flex-start",
        mb: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "60%",
          p: 3,
          borderRadius: 4,
          backgroundColor: isAuthor ? "#DCF8C6" : "#FFFFFF",
          boxShadow: 1,
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: "bold", mr: 5 }}>
          {messageContent.sender}
        </Typography>
        <Typography variant="caption">
          Sent at: {messageContent.time}
        </Typography>
        <Typography>{messageContent.message}</Typography>
      </Box>
    </Box>
  );
};

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = () => {
    if ((username !== "", currentMessage !== "")) {
      const messageData = {
        room: room,
        sender: username,
        message: currentMessage,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };

      socket.emit("send_message", messageData);
      setCurrentMessage("");
    }
  };

  const getRoomForHistory = () => {
    if (room !== "") {
      socket.emit("get_history", room);
      socket.on("get_history", (data) => {
        setMessageList([...data]);
      });
    }
  };

  getRoomForHistory();

  return (
    <Grid container direction="column" height="100%">
      <Grid item xs>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              p: 3,
              marginTop: 3,
              borderColor: "divider",
            }}
          ></Box>
          <Box
            sx={{
              minHeight: {
                xs: "calc(100vh - 300px)",
                sm: "calc(100vh - 200px)",
              },
              overflowY: "auto",
              flexGrow: 1,
            }}
          >
            {messageList.map((messageContent, index) => (
              <Message
                key={index}
                messageContent={messageContent}
                username={username}
              />
            ))}
          </Box>
          <Box
            sx={{
              p: 2,
              borderColor: "divider",
              display: "flex",
            }}
          >
            <TextField
              value={currentMessage}
              placeholder="Hey..."
              variant="outlined"
              fullWidth
              onChange={(event) => setCurrentMessage(event.target.value)}
              onKeyPress={(event) => event.key === "Enter" && sendMessage()}
              sx={{
                mr: 1,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#DCF8C6",
                },
              }}
            />
            <Button
              variant="contained"
              onClick={sendMessage}
              sx={{ width: "60px", height: "55px", p: 0 }}
            >
              <SendIcon />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chat;
