import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinChat from "./JoinChat";
import Video from "./Video";
import Chat from "./Chat";
import Home from "./Home";
import Header from "./Header";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <>
      <Video />
      <Header joined={joined} />
      <Router>
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
