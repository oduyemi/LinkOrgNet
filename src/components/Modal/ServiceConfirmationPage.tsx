import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Paper
} from '@mui/material';
import SuccessGif from '/images/gif/success1.gif';
import ResidentialImage from "/images/svg/residential-wrap.svg";
import EnterpriseImage from "/images/svg/enterprise-wrap.svg";
import { selectCurrentFlow } from '../../Service/features/serviceFlow/selectors';
import { resetServiceFlow } from '../../Service/features/serviceFlow/serviceFlowSlice';
import CloseIcon from '@mui/icons-material/Close';

interface ServiceConfirmationPageProps {
  onComplete: () => void;
}

const ServiceConfirmationPage: React.FC<ServiceConfirmationPageProps> = ({onComplete}) => {
 const dispatch = useDispatch();
  const currentFlow = useSelector(selectCurrentFlow);


  const isResidential = currentFlow === 'residential';
  const imageSrc = isResidential ? ResidentialImage : EnterpriseImage;
  const confirmationText = isResidential
    ? 'A sales team representative will reach out within 24 - 72 working hours to complete your purchase'
    : 'A sales team representative will reach out within 24 - 72 working hours to follow up with your inquiry';

       const handleClose = () => {
          dispatch(resetServiceFlow());
          onComplete();
        };

  return (
    <Box sx={{
      alignSelf: 'stretch',
      height: 630,
      display: 'flex',
      alignItems: 'center',
      flexDirection: { xs: "column", sm: "row" },
      borderRadius: "24px",
    }}>
      {/* Left Image Section */}
      <Box sx={{
        width: 510,
        height: '100%',
        minWidth: 320,
        p: 3,
        outline: '1px #D9D9D9 solid',
        display: { xs: "none", sm: "flex" },
      }}>
        <Box component="img"
          src={imageSrc}
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 1,
          }}
        />
      </Box>

      {/* Right Content */}
      <Paper sx={{
        width: { xs: '90%', sm: 510 },
        height: { xs: '94%', sm: '92%' },
        borderTopLeftRadius: { sm: 10 },
        borderBottomLeftRadius: { sm: 10 },
        outline: '1px #D9D9D9 solid',
        margin: { xs: 0, sm: "24px" },
        marginTop:{xs:"6%", sm:"24px"},
        padding: {xs:"16px", sm:"32px 20px"},
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: 8,
      }}>
   
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{position:"absolute", top:"30px", right:"30px", width:"30px", height:"30px"}}>
         <CloseIcon  style={{width:"100%"}} onClick={handleClose}/>
        </Box> 
          <Typography variant="h5" color="#010156" fontWeight={600} sx={{ fontSize: "20px" }}>
            Purchase Request Submitted Successfully
          </Typography>
          <Typography color="#333E49">
            {confirmationText}
          </Typography>
        </Box>

        <Box sx={{ width: { xs: "136px", sm: "240px" }, height: { xs: "136px", sm: "240px" } }}>
          <img src={SuccessGif} alt="success" style={{ width: "100%" }} />
        </Box>

        <Typography color="#333E49">
          Thanks for choosing LinkOrgNet
        </Typography>
      </Paper>
    </Box>
  );
};

export default ServiceConfirmationPage;

