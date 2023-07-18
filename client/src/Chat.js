import React, { useEffect, useState } from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Message = ({ messageContent, username }) => {
  const isAuthor = username === messageContent.author;

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
          {messageContent.author}
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
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };

      socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const receiveMessage = (data) => {
      setMessageList((list) => [...list, data]);
    };

    socket.on("receive_message", receiveMessage);

    return () => {
      socket.off("receive_message", receiveMessage);
    };
  }, [socket]);

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
          <Box height="500px" sx={{ overflowY: "auto", flexGrow: 1 }}>
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
              sx={{ minWidth: "40px", width: "40px", height: "40px", p: 0 }}
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
