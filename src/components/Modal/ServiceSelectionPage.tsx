import React from 'react';  
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';  
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';  
import { FlowType, Plan } from '../../Service/features/serviceFlow/types';  
import { openModal } from '../../Service/features/serviceFlow/serviceFlowSlice';  
import ResidentialImage from '/images/svg/residential-wrap.svg';  
import EnterpriseImage from '/images/svg/enterprise-wrap.svg';  
import ImageWrap from '/images/svg/image-wrap.svg';  
import House from '/images/icons/house1.svg';  
import CourtHouse from '/images/icons/courthouse.svg';  
import { useMediaQuery, useTheme } from '@mui/material';  
import { resetServiceFlow } from '../../Service/features/serviceFlow/serviceFlowSlice';

export interface ServiceSelectionPageProps {  
  initialFlow?: FlowType;  
  onFlowChange: (flowType: FlowType) => void;  
  onPlanSelect?: (plan: Plan) => void;  
  onComplete: () => void;  
}  

const ServiceSelectionPage: React.FC<ServiceSelectionPageProps> = ({  
  onFlowChange, 
  onComplete,   
}) => {  
  const dispatch = useDispatch();  
  const [bgImage, setBgImage] = React.useState(ImageWrap);  
  const [isHovered, setIsHovered] = React.useState(false);  
  const theme = useTheme();  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 


  const handleHoverResidential = () => {  
    setBgImage(ResidentialImage);  
    setIsHovered(true);  
  };  

  const handleHoverEnterprise = () => {  
    setBgImage(EnterpriseImage);  
    setIsHovered(true);  
  };  

  const handleMouseLeave = () => {  
    setBgImage(ImageWrap);  
    setIsHovered(false);  
  };  
 ;  



const handleFlowChange = (flowType: FlowType) => {  
  dispatch(openModal());  
  onFlowChange(flowType);  
};  

 const handleClose = () => {
    dispatch(resetServiceFlow());
    onComplete();
  };

  return (  
    <Box sx={{ padding: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}> 
 
      <Card sx={{ width: '100%', height: '352px', position: 'relative', borderRadius: 2, overflow: 'hidden' }}>  
        <CardMedia component="img" alt="Background" image={bgImage} sx={{ height: '100%', objectFit: 'cover', width: '100%' }} /> 
        <Box sx={{position:"absolute", top:"5px", right:"5px", width:"30px", height:"30px"}}>
         <CloseIcon  style={{width:"100%"}} onClick={handleClose}/>
        </Box> 
        <CardContent 
        sx={{ 
          position: 'absolute',  
          pointerEvents: 'none',
          bottom: 0,  
          left: 0,  
          right: 0,  
          padding: 2  

        }}>  

          {!isHovered && (  
            <Typography  
              variant="h3"  
              sx={{  
                color: 'white',  
                  textShadow: '0px -2px 2px rgba(0, 0, 0, 0.15)',  
                  fontFamily: 'Museo Slab',  
                  textAlign: 'center',
                  fontSize:{xs:"24px", sm:"48px"} 
              }}  
            >  
              What would you like to do today?  
            </Typography>  
          )}  
        </CardContent>  
      </Card>  

      <Box sx={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', zIndex: 1, width:"100%" }}>   
        <Button  
          fullWidth  
          sx={{ display: 'flex', alignItems: 'center', width:"100%", padding: 2, margin: '10px 0px',cursor: 'pointer', borderRadius: 2, '&:hover': { background: '#F9FAFB' }, justifyContent: 'flex-start', textTransform: 'none' }}  
          onMouseEnter={handleHoverResidential}  
          onMouseLeave={handleMouseLeave}  
          onClick={() => handleFlowChange('residential')}  
        >  
          <Box sx={{ width: 28, height: 28 }}>  
            <img src={House} alt="Residential" style={{ width: '100%' }} />  
          </Box>  
           <Typography  
                        sx={{ color: '#292D32', fontFamily: 'Helvetica Neue', fontSize:{xs:"14px", sm:"20px"}, fontWeight: "100", paddingLeft: "20px" }}  
                >  
              {isMobile ? "Buy a Residential/SME Plan" : "Buy a Residential or SME Internet Plan"}   
           </Typography>  
        </Button>  

        <Button  
          fullWidth  
          sx={{ display: 'flex', alignItems: 'center', padding: 2, margin: '5px 0px', borderRadius: 2, '&:hover': { background: '#F9FAFB' }, justifyContent: 'flex-start', textTransform: 'none' }}  
          onMouseEnter={handleHoverEnterprise}  
          onMouseLeave={handleMouseLeave}  
          onClick={() => handleFlowChange('enterprise')}  
        >  
          <Box sx={{ width: 28, height: 28 }}>  
            <img src={CourtHouse} alt="Enterprise" style={{ width: '100%' }} />  
          </Box>  
         <Typography  
           sx={{ color: '#292D32', fontFamily: 'Helvetica Neue', fontSize:{xs:"14px", sm:"20px"}, fontWeight: "0", paddingLeft: "20px", letterSpacing:"0%" }}  
             >  
            Explore an Enterprise Service  
        </Typography> 
        </Button>  
      </Box>  
    </Box>  
  );  
};  

export default ServiceSelectionPage;  