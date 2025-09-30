import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Dialog } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from '/images/logo/logo.svg';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../Service/features/serviceFlow/serviceFlowSlice';
import ServiceFlow from '../components/Modal/serviceFlow';
import { RootState } from '../Service/store';
import {FlowType} from "../Service/features/serviceFlow/types"



const navItems = [
  { name: "Home", path: "/" },
  { name: "Residential", path: "/residential" },
  { name: "Business/SME", path: "/business" },
  { name: "Enterprise", path: "/enterprise" },
  { name: "About Us", path: "/about" },
];

interface NavbarProps {
  backgroundColor: string;
}

const TopNav: React.FC<NavbarProps> = ({ backgroundColor }) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.serviceFlow.isModalOpen);

const [initialFlowType, setInitialFlowType] = useState<FlowType | undefined>(undefined);
 

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);


  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>, flowType: FlowType) => {  
    event.preventDefault();
    setInitialFlowType(flowType);  
    dispatch(openModal());  
    setMenuOpen(false);  
}; 

  const handleCloseModal = () => {  
    dispatch(closeModal());  
    setInitialFlowType(undefined); 
    
  };  



  return (
    <Box>
            <Box
      sx={{
        width:"100%",
      }}
    >
          <Box 
       sx={{
        width:"100%",
        display: 'flex',
        justifyContent: "space-between", 
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        minWidth:"100%",
        height: '97px',
        padding: { xs: '20px 2.5%', sm: '35px 5%', md: '35px 7%' },
        backgroundColor: backgroundColor,
        backdropFilter: 'blur(15px)',
        opacity: 0.9,
        zIndex: 1000,
       

        }}>

        <Link to="/" style={{ textDecoration: "none" }}>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ width: {sm:180, md:150, xl:180}, height: 40, objectFit: 'contain', }}
        />
      </Link>

      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', margin:"0px 5%", gap:{sm:6, md:4, xl:2} }}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{ textDecoration: "none", display: "flex" }}
            onClick={() => setActive(item.path)}
          >
            <Box
              sx={{
                padding: active === item.path ? '8px 0px' : '8px 5%',
                width:"100%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                color: active === item.path ? '#E75D11' : '#010157',
                fontWeight: 500,
                fontSize:{md:"16px", xl:"20px"},
                fontFamily: 'Inter',
                position: 'relative', 
              }}
            >
              {active === item.path && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: "100%",
                    height: 4,
                    backgroundColor: '#E75D11',
                    borderRadius: 16,
                    padding: '0px 0%',
                  }}
                />
              )}
              <Typography sx={{width:"fit-content", padding:"0px 10%", whiteSpace: 'nowrap'}}>{item.name}</Typography>
            </Box>
          </Link>
        ))}

      </Box>
      
            <Box sx={{
              width:"fit-content",
             
            }}>
            <Button
          variant="contained"
          sx={{
            color: 'white',
            borderRadius: '64px',
            width:"fit-content",
            padding: '8px 24px',
            fontSize: {md:"16px", xl:"20px"},
            fontFamily:"Inter",
            fontWeight: 600,
            textTransform: 'none',
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            letterSpacing:"-0.79px",
            gap: 1,
            backgroundColor: "#010156",
            "&:hover": { backgroundColor: "#e65d0f", boxShadow:"none" },
          }}
          onClick={(event) => handleOpenModal(event, "initial")}
        >
          Get connected
          <ArrowForwardIcon />
        </Button>
      </Box>

      <IconButton
        sx={{ display: { xs: 'flex', md: 'none', } }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {menuOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: {xs:'97px', md:'40%'},
            left: 0,
            width: '100%',
            backgroundColor: backgroundColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignContent:"flex-start",
            justifyContent:"left",
            padding: '20px 24px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000, 
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ textDecoration: "none", width: '100%', textAlign: 'center' }}
              onClick={() => { setActive(item.path); setMenuOpen(false); }}
            >
              <Typography
                sx={{
                  padding: '12px 0px',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: active === item.path ? '#E75D11' : '#010157',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  alignContent:"flex-start",
                  justifyContent:"left",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}

          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              color: 'white',
              borderRadius: '64px',
              letterSpacing:"-0.79px",
              padding: '8px 24px',
              fontSize: {md:"16px", xl:"20px"},
              fontWeight: 600,
              textTransform: 'none',
              backgroundColor: "#010156",
              "&:hover": { backgroundColor: "#e65d0f" },
            }}
            onClick={(event) => handleOpenModal(event, "initial")}
            >
            Get connected
            <ArrowForwardIcon />
          </Button>
        </Box>
      )}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        disablePortal
        keepMounted
        maxWidth="lg"
        sx={{ 
          "& .MuiDialog-container": {
            background:  "transparent !important",
          },
          "& .MuiDialog-paper": {
            background:  "transparent !important",
            boxShadow: 'none',
            borderRadius: '24px',
            overflow: 'visible',
            zIndex: 440000,
          },
          "& .MuiBackdrop-root": {
      background:  "transparent !important",
    }
        }}
        slotProps={{
          backdrop: {
            sx: {
             // ✅ Transparent backdrop
        backgroundColor: "transparent !important",
        backdropFilter: "none !important",
            }
          }
        }}

        BackdropProps={{
          sx: {
            backgroundColor: "transparent !important",
            backdropFilter: 'none',
          }
        }}
      >
        <ServiceFlow 

        initialFlow={initialFlowType}  
        onComplete={handleCloseModal}  


        />
      </Dialog>


      </Box>

         </Box>
  
   
    </Box>

  );
};

export default TopNav;


