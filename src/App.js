import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import "./App.css";
import "animate.css";
import { Box } from "@mui/material";
import TawkToChat from './components/TawkTo';
import ConsentBanner from "./ConsentBanner";

function App() {
  useEffect(() => {
    const cursorOuter = document.querySelector(".cursor-outer");
    const cursorInner = document.querySelector(".cursor-inner");

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursorOuter.style.transform = `translate(${x}px, ${y}px)`;
      cursorInner.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseDown = () => {
      cursorOuter.style.width = '30px';
      cursorOuter.style.height = '30px';
    };

    const handleMouseUp = () => {
      cursorOuter.style.width = '40px';
      cursorOuter.style.height = '40px';
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Box className="App">
      <Box className="mouse-cursor cursor-outer"></Box>
      <Box className="mouse-cursor cursor-inner"></Box>
      <Navbar />
      <ConsentBanner />
      <TawkToChat />
    </Box>
  );
}

export default App;
