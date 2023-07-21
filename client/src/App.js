import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinChat from "./JoinChat";
import Video from "./Video";
import Chat from "./Chat";
import Home from "./Home";
import Header from "./Header";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const storedUsername = localStorage.getItem("username") || "";
  const storedRoom = localStorage.getItem("room") || "";
  const [username, setUsername] = useState(storedUsername);
  const [room, setRoom] = useState(storedRoom);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    localStorage.setItem("username", username);
    localStorage.setItem("room", room);
  }, [username, room]);

  return (
    <>
      <Video />
      <Router>
        <Header joined={joined} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/join"
            element={
              <JoinChat
                setJoined={setJoined}
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path="/chat/:room"
            element={<Chat socket={socket} username={username} room={room} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
