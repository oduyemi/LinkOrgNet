import React from "react";
import { Box } from "@mui/material";
import { NavMenu } from "./NavMenu";
import { TopHeader } from "./TopHeader";
import { Offcanvas } from "./Offcanvas";

export const Header = ({ children }) => {
  return (
    <Box>
        <TopHeader />
        <NavMenu />
        <Offcanvas />
    </Box>
  );
};
