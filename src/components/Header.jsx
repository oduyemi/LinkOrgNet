import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavMenu } from "./NavMenu";
import { TopHeader } from "./TopHeader";
import { Offcanvas } from "./Offcanvas";

export const Header = ({ children }) => {
  // State to manage the off-canvas open/close status
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  // Function to open the off-canvas menu
  const handleOpenOffcanvas = () => {
    setOffcanvasOpen(true);
  };

  // Function to close the off-canvas menu
  const handleCloseOffcanvas = () => {
    setOffcanvasOpen(false);
  };

  return (
    <Box>
      <TopHeader />
      {/* Pass the handler to NavMenu */}
      <NavMenu onOpenOffcanvas={handleOpenOffcanvas} />
      {/* Pass the state and close handler to Offcanvas */}
      <Offcanvas isOpen={isOffcanvasOpen} onClose={handleCloseOffcanvas} />
      {children}
    </Box>
  );
};
