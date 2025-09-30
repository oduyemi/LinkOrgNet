import {useState} from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../Service/features/serviceFlow/serviceFlowSlice';
import ServiceFlow from "../Modal/serviceFlow";
import { RootState } from '../../Service/store';
import {FlowType} from "../../Service/features/serviceFlow/types"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Dialog from "@mui/material/Dialog";


interface ActionButtonProps {
  text: string; 
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onOpen }) => (
  <Button 
    variant="contained" 
    onClick={onOpen}
    sx={{   
        color: '#e65d0f',
        height:"48px",
        borderRadius: '64px',
        boxShadow: 'none',
        padding: '6px 26px',
        fontSize: "16px",
        letterSpacing: '-1px',
        fontWeight: 600,
        textTransform: 'none',
        display: 'flex',
        width:{xs:"90%", sm:"fit-content"},
        alignItems: 'center',
        gap: 1,
        margin:"23px 0px 40px",
        backgroundColor: "#fff",
        "&:hover": { backgroundColor: "#010156", color:"#fff", boxShadow: "none" },}}>
        {text}
        <ArrowForwardIcon />
    </Button>
);


export const PreFooter = () => {
   const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.serviceFlow.isModalOpen);
    
    const [initialFlowType, setInitialFlowType] = useState<FlowType | undefined>(undefined);

    const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>, flowType: FlowType) => {  
      event.preventDefault();
      setInitialFlowType(flowType);  
      dispatch(openModal());   
  }; 
  
    const handleCloseModal = () => {  
      dispatch(closeModal());  
      setInitialFlowType(undefined); 
      
    }; 
  return (
    <Box
      className="circular"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "62vh",
        textAlign: "center",
        backgroundColor: "#C55226",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
        <Box
          
        />
      {/* Hero Text */}
      <Typography variant="h4" className="mobileheading" fontFamily="Museo Slab Medium" sx={{ width:{xs:"80%", sm:"60%"}, fontWeight: 400, fontSize:"42px",  maxWidth: "800px", zIndex: 2 }}>
        Unlock fast, reliable and seamless connectivity with LinkOrgNet today
      </Typography>
      <Typography variant="body1" className="smallText" fontFamily="Inter" sx={{ fontSize:{xs: 14, sm:16 }, mt: 2, width:{xs:"80%", sm:"80%"}, maxWidth: "600px", zIndex: 2 }}>
        Choose mind-blowing internet speed, stable networks, 
        affordability and custom services for you. Contact 
        us today to get started
      </Typography>

      {/* Button */}
      <ActionButton text="Get connected" onOpen={(event: React.MouseEvent<HTMLButtonElement>) => handleOpenModal(event, "residential")}  />

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}

        maxWidth="lg"
        sx={{ 
          "& .MuiPaper-root": { 
            borderRadius:"24px"
          }
        }}
      >
        <ServiceFlow 

        initialFlow={initialFlowType}  
        onComplete={handleCloseModal}  


        />
      </Dialog>
    </Box>

    
  );
};

