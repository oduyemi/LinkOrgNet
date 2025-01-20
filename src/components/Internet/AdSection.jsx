import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";


export const AdSection = ({ 
  heading, 
  description, 
  buttonText, 
  buttonLink, 
  imageSrc, 
  imageAlt, 
  imageLink 
}) => {
    return (
        <Box 
            sx={{ 
                my: 5, 
                px: 2, 
                backgroundColor: '#f5f5f5', 
                borderRadius: 2,
                padding: { xs: '20px', md: '40px' } 
            }}
        >
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography 
                        variant="h4" 
                        className="blutext" 
                        sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
                    >
                        {heading}
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.25rem' } }}
                    >
                        {description}
                    </Typography>
                    <Button 
                        variant="contained" 
                        className="blu"
                        sx={{ px: 5, py: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}
                        component={Link} to={buttonLink}
                    >
                        {buttonText}
                    </Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Link to={imageLink}>
                        <Box 
                            sx={{ 
                                position: 'relative', 
                                overflow: 'hidden', 
                                borderRadius: 2, 
                                boxShadow: 3, 
                                maxWidth: '100%', 
                                maxHeight: '100%', 
                            }}
                        >
                            <img 
                                src={imageSrc} 
                                alt={imageAlt} 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    display: 'block', 
                                    objectFit: 'cover', 
                                    borderRadius: 8, 
                                    transition: 'transform 0.3s', 
                                }} 
                            />
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}
