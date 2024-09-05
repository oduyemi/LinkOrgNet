import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavMenu } from "./NavMenu";
import { TopHeader } from "./TopHeader";
import { Offcanvas } from "./Offcanvas";

export const Header = ({ children }) => {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
  const handleOpenOffcanvas = () => {
    setOffcanvasOpen(true);
  };

  const handleCloseOffcanvas = () => {
    setOffcanvasOpen(false);
  };

  return (
    <Box>
      <TopHeader />
      <NavMenu onOpenOffcanvas={handleOpenOffcanvas} />
      <Offcanvas isOpen={isOffcanvasOpen} onClose={handleCloseOffcanvas} />
      {children}
    </Box>
  );
};
