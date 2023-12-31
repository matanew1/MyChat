import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <video id="background-video" loop autoPlay muted playsInline>
      <source src="/bg_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
