import React from "react"
import { Box, Typography } from "@mui/material";



export const Header = () => {
    return(
       <Box className="bg-primary">
            <Typography
                variant="body1"
                className="text-light"
            >
                Header Here..
            </Typography>
        </Box>
    )
}