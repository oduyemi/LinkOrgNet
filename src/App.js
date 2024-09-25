import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import "./App.css";
import "animate.css";
import TawkToChat from './components/TawkTo';

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
      cursorOuter.style.transform = `scale(0.8)`;
    };

    const handleMouseUp = () => {
      cursorOuter.style.transform = `scale(1)`;
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
    <div className="App">
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      <Navbar />
      <TawkToChat/>
    </div>
  );
}

export default App;
