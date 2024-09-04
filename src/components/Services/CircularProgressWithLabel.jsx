import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const CircularProgressWithLabel = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress 
        variant="determinate" 
        value={value} 
        size={80} 
        thickness={4} 
        sx={{ color: "#E65D0F" }} 
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary"  sx={{ fontSize: "20px", fontWeight: "600" }} >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
