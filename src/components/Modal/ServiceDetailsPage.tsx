import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Button,
  TextField,
  Avatar,
  CircularProgress,
  styled
} from '@mui/material';
import { useMediaQuery, useTheme } from "@mui/material";

// Images
import ResidentialImage from "/images/svg/residential-wrap.svg";
import EnterpriseImage from "/images/svg/enterprise-wrap.svg";
import ResidentIcon from "/images/icons/residentIcon.svg";
import EnterpriseIcon from "/images/icons/enterpriseIcon.svg";
import Naira from "/images/icons/naira1.svg";
import CloseIcon from '@mui/icons-material/Close';
import { resetServiceFlow } from '../../Service/features/serviceFlow/serviceFlowSlice';


// Redux
import { 
  selectCurrentFlow,
  selectFormValues,
  selectSelectedItem,
  selectSubmitError,
  selectIsSubmitting
} from '../../Service/features/serviceFlow/selectors';
import {
  submitRetailRequest,
  submitEnterpriseRequest,
} from '../../Service/features/serviceFlow/serviceFlowThunks';
 import { updateFormValues, setResidentialStep, setEnterpriseStep } from '../../Service/features/serviceFlow/serviceFlowSlice';
import { AppDispatch } from '../../Service/store';
import { FormValues, Plan, EnterpriseService } from '../../Service/features/serviceFlow/types';

// Styled components
const GradientAvatar = styled(Avatar)(() => ({
  background: 'linear-gradient(180deg, #092277 0%, #E75D11 0%, #003EF2 100%, #E65D0F 100%)',
  width: 44,
  height: 44
}));

const OrangeButton = styled(Button)(() => ({
  background: '#E65D0F',
  borderRadius: 64,
  color: 'white',
  height: "44px",
  width: "100%",
  fontFamily: 'Museo Slab Medium',
  fontWeight: "600",
  textTransform: "none",
  fontSize: "16px",
  '&:disabled': {
    backgroundColor: '#D4D5DF',
    opacity: 0.7,
  }
}));

interface ServiceDetailsPageProps {
  onComplete: () => void;
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ onComplete }) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  // Selectors
  const currentFlow = useSelector(selectCurrentFlow);
  const formValues = useSelector(selectFormValues);
  const selectedItem = useSelector(selectSelectedItem);
  const submitError = useSelector(selectSubmitError);
  const isSubmitting = useSelector(selectIsSubmitting);


  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    dispatch(updateFormValues({ [name as keyof FormValues]: value }));
  };

  const handleBack = () => {
    if (currentFlow === 'residential') {
      dispatch(setResidentialStep(0));
    } else if (currentFlow === 'enterprise') {
      dispatch(setEnterpriseStep(0));
    }
  };

  const handleSubmit = async () => {
    try {
      if (currentFlow === 'residential') {
        await dispatch(submitRetailRequest()).unwrap();
        dispatch(setResidentialStep(3));
      } else if (currentFlow === 'enterprise') {
        await dispatch(submitEnterpriseRequest()).unwrap();
        dispatch(setEnterpriseStep(3));
      }
    } catch (error) {
      console.error('Error in form submission:', error);
    }
  };

  // Helper functions for display names
  const getDisplayName = (plan: string) => {
    const displayNames: Record<string, string> = {
      'Express': isMobile ? 'Express Plan' : 'Express Data Plan',
      'Super': isMobile ? 'Super Plan' : 'Super Data Plan',
      'Gold': isMobile ? 'Gold Plan' : 'Gold Data Plan',
      'Linkorg VIP1': isMobile ? 'VIP 1 Plan' : 'VIP 1 Data Plan',
      'Linkorg VIP2': isMobile ? 'VIP 2 Plan' : 'VIP 2 Data Plan',
      'Linkorg VIP3': isMobile ? 'VIP 3 Plan' : 'VIP 3 Data Plan'
    };
    return displayNames[plan] || plan;
  };

  const getEnterpriseDisplayName = (service: string) => {
    const displayNames: Record<string, string> = {
      'fiber to office': 'Fiber-to-Office Internet Service',
      'voip': 'Voice Over Internet Protocol (VOIP)',
      'vsat': 'Satellite (VSAT) Connectivity Service',
      'storage': 'Data Storage Services',
      'data center': 'Data Centers & Collocation',
      'it': 'IT & Network Management Services'
    };
    return displayNames[service] || service;
  };

const calculateTotal = () => {
    if (currentFlow === 'residential' && selectedItem) {
      const plan = selectedItem as Plan;

  
      const price = parseFloat(plan.price?.replace(/[^\d.]/g, '') || '0');
      const installationFee = 50000; 
      const vatRate = 0.075; 
      const subtotal = price + installationFee;
      const vatAmount = subtotal * vatRate;
      const total = subtotal + vatAmount;
      
      return {
        price,
        installationFee,
        vatRate,
        vatAmount,
        total
      };
    }
    return null;
  };

  const totalDetails = calculateTotal();

   const handleClose = () => {
        dispatch(resetServiceFlow());
        onComplete();
      };

  // Residential flow details
  if (currentFlow === 'residential') {
    return (
      <Box sx={{
        alignSelf: 'stretch',
        height: { xs: 'auto', sm: 630 },
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: "column", sm: "row" },
        borderRadius: "24px",
        border: '1px solid #D9D9D9',
        overflow: 'hidden'
      }}>
        {/* Left Image Section - Hidden on mobile */}
        <Box sx={{
          width: { sm: 510 },
          height: '100%',
          minWidth: 320,
          p: 3,
          borderRight: '1px solid #D9D9D9',
          display: { xs: "none", sm: "flex" },
        }}>
          <Box component="img" 
            src={ResidentialImage}
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: 1,
            }} 
          />
        </Box>

        {/* Right Content */}
        <Box sx={{
          width: { xs: '100%', sm: 510 },
          height: '100%',
          p: { xs: 2, sm: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
           <Box sx={{position:"absolute", top:"5px", right:"5px", width:"30px", height:"30px"}}>
         <CloseIcon  style={{width:"100%"}} onClick={handleClose}/>
        </Box> 
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <GradientAvatar>
                <img src={ResidentIcon} alt="" />
              </GradientAvatar>
              <Typography variant="h6" fontWeight={600} sx={{ 
                fontSize: { xs: "16px", sm: "24px" },
                letterSpacing: "-2%"
              }}>
                {isMobile ? "Get a Residential Data Plan" : "Get a Residential/SME Data Plan"}
              </Typography>
            </Box>

            {submitError && (
              <Typography color="error" sx={{ mt: 2 }}>
                {submitError}
              </Typography>
            )}

            <Box sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" },
              width:"100%",
              gap: 3
            }}>
              {/* Selected Plan */}
              <Box sx={{
                p: 2,
                border: "1px solid #D4D5DF",
                borderRadius: "8px",
                backgroundColor: "#F9FAFB",
                width: { xs: '100%', sm: 215 },
                minHeight: 124
              }}> 
                <Box sx={{ 
                  width: 8, 
                  height: 8, 
                  bgcolor: "#E65D0F", 
                  borderRadius: '50%' 
                }} />
                <Typography fontWeight={700} sx={{
                  color: "#5D6771", 
                  fontSize: "16px", 
                  fontFamily: "Helvetica Neue", 
                  pt: 1.25
                }}>
                  {selectedItem ? getDisplayName((selectedItem as Plan).name) : ''} 
                </Typography>
              
                <Typography fontWeight={700} sx={{
                  color: "#5D6771", 
                  fontSize: "16px", 
                  fontFamily: "Helvetica Neue",
                  fontWeight:"100",
                  py: 0.5,
                  marginTop:"-7px"
                }}>
                  {(selectedItem as Plan)?.speed}
                </Typography>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center",}}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    cursor: "pointer", 
                    mt: 1, 
                    fontSize:"20px",
                    lineHeight:"40px",
                    color:"#5D6771",
                    fontWeight:"600"
                  }}
                >
                 ₦{(selectedItem as Plan)?.price}
                </Typography>
                <Typography 
                  variant="body2" 
                  onClick={handleBack} 
                  color="primary" 
                  sx={{ 
                    cursor: "pointer", 
                    mt: 1, 
                    textDecoration: "underline" ,
                    fontSize:"14px",
                    fontFamily:"inter",
                    letterSpacing:"-0.9px"
                  }}
                >
                  Change Plan
                </Typography>
                </Box>
             
              </Box>

              {/* Plan Features */}
              <Box sx={{ 
                flex: 1,
                pt: { xs: 0, sm: 2 },
                pl: { xs: 0, sm: 3 }
              }}>
                <ul style={{ 
                  fontSize: isMobile ? "14px" : "12px", 
                  color: "#8A8A94", 
                  paddingLeft: isMobile ? "20px" : "0", 
                  marginTop: 10,
                  fontWeight:"10",
                
                }}>
                  <li style={{ paddingBottom: "8px", color:"#8A8A94" }}>Enjoy Unlimited data usage</li>
                  <li style={{ paddingBottom: "8px" }}>Easy to install and set up</li>
                  <li style={{ paddingBottom: "8px" }}>Stable speed of {(selectedItem as Plan)?.speed}</li>
                  <li style={{ paddingBottom: "8px" }}>Reliable and stable network</li>
                
                </ul>
              </Box>
            </Box>

            {/* Cost Breakdown */}
            <Box sx={{ mt: { xs: 2, sm: 4 }, mb: 1 }}>
              <Typography sx={{ pb: 0.5 }}>Cost Breakdown  <span style={{fontSize:"12px", fontStyle:"italics", color:"#8A8A94", letterSpacing: isMobile ? "-0.7px":""}}> 
              {isMobile && <br />}
                (Your recurring monthly bill will be the data plan price + VAT)</span></Typography> 
              <Box sx={{
                border: "1px solid #D9D9D9", 
                borderRadius: 2,
                height: 107,
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                px: 2,
                py: 1
              }}>  
                <Box>
                  <ul style={{ paddingLeft:"15px"}}>
                    <li style={{ color: "#8A8A94", padding:"5px 0px"}}>Data Plan for 30 days:</li>
                    <li style={{ color: "#8A8A94", padding:"5px 0px"}}> One-Time Installation Fee:</li>
                    <li style={{ color: "#8A8A94", padding:"5px 0px"}}> Value Added Tax:</li>
                  </ul>
                </Box>

                <Box textAlign="right">
                <ul >
                    <li style={{ color: "#8A8A94", padding:"5px 0px"}}>₦{(selectedItem as Plan)?.price}</li>
                    <li style={{ color: "#8A8A94", padding:"5px 0px"}}> ₦{totalDetails?.installationFee.toLocaleString()}</li>
                    <li style={{ color: "#8A8A94", padding:"5px 0px"}}> (7.5%)</li>
                  </ul>
                </Box>
              </Box>
            </Box>
            
            {/* Estimated Total */}
            <Box sx={{
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              height: 80, 
              border: "1px solid #D9D9D9", 
              borderRadius: "8px", 
              p: 2,
              mb: 2
            }}>
              <Typography>Estimated Total</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ height: 37, width: 18, mr: 0.5, mt: 1 }}>
                  <img src={Naira} alt="" style={{ width: "100%" }}/>
                </Box>
                <Typography sx={{
                  fontSize: "30.85px", 
                  color: "#5D6771", 
                  fontFamily: "Museo Slab Medium", 
                  fontWeight: "700"
                }}>
                  {totalDetails?.total.toLocaleString(undefined, {maximumFractionDigits: 2})}
                </Typography>
              </Box>
            </Box>

            {/* Submit Button */}
            <OrangeButton 
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <CircularProgress 
                  size={24} 
                  sx={{ color: "white", mr: 1 }} 
                />
              ) : null}
              Submit Purchase Request
            </OrangeButton>
          </Box>
        </Box>
      </Box>
    );
  }


  // Enterprise flow details
  if (currentFlow === 'enterprise') {
    return (
      <Box sx={{
        alignSelf: 'stretch',
        height: { xs: 'auto', sm: 630 },
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: "column", sm: "row" },
        borderRadius: "24px",
        border: '1px solid #D9D9D9',
        overflow: 'hidden'
      }}>
        {/* Left Image Section - Hidden on mobile */}
        <Box sx={{
          width: { sm: 510 },
          height: '100%',
          minWidth: 320,
          p: 3,
          borderRight: '1px solid #D9D9D9',
          display: { xs: "none", sm: "flex" },
        }}>
          <Box component="img" 
            src={EnterpriseImage}
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: 1,
            }} 
          />
        </Box>

        {/* Right Content */}
        <Box sx={{
          width: { xs: '100%', sm: 510 },
          height: '100%',
          p: { xs: 2, sm: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
           <Box sx={{position:"absolute", top:"5px", right:"5px", width:"30px", height:"30px"}}>
         <CloseIcon  style={{width:"100%"}} onClick={handleClose}/>
        </Box> 
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <GradientAvatar>
                <img src={EnterpriseIcon} alt="" />
              </GradientAvatar>
              <Typography variant="h6" fontWeight={600} sx={{ 
                fontSize: { xs: "16px", sm: "24px" }
              }}>
                Enterprise Service Details
              </Typography>
            </Box>

            {submitError && (
              <Typography color="error" sx={{ mt: 2 }}>
                {submitError}
              </Typography>
            )}

            <Box sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" },
              gap: 2
            }}>
              {/* Selected Service */}
              <Box sx={{
                p: 2,
                border: "1px solid #D4D5DF",
                borderRadius: "8px",
                backgroundColor: "#F9FAFB",
                width: { xs: '100%', sm: 215 },
                minHeight: 124
              }}> 
                <Box sx={{ 
                  width: 8, 
                  height: 8, 
                  bgcolor: "#E65D0F", 
                  borderRadius: '50%' 
                }} />
                <Typography fontWeight={700} sx={{
                  color: "#5D6771", 
                  fontSize: "16px", 
                  fontFamily: "Helvetica Neue", 
                  pt: 1.25
                }}>
                  {selectedItem ? getEnterpriseDisplayName((selectedItem as EnterpriseService).name) : ''}
                </Typography>
                <Typography 
                  variant="body2" 
                  onClick={handleBack} 
                  color="primary" 
                  sx={{ 
                    cursor: "pointer", 
                    mt: 1, 
                    textDecoration: "underline" 
                  }}
                >
                  Change Service
                </Typography>
              </Box>
              
              {/* Service Features */}
              <Box sx={{ 
                flex: 1,
                pt: { xs: 0, sm: 2 },
                pl: { xs: 0, sm: 3 }
              }}>
                <ul style={{ 
                  fontFamily: "Helvetica Neue", 
                  fontSize: isMobile ? "14px" : "12px", 
                  color: "#8A8A94", 
                  paddingLeft: isMobile ? "20px" : "0", 
                  margin: 0
                }}>
                  <li style={{ paddingBottom: "7px" }}>Enjoy unlimited data usage</li>
                  <li style={{ paddingBottom: "7px" }}>Easy to install and set up</li>
                  <li style={{ paddingBottom: "7px" }}>Enjoy high speed internet</li>
                  <li>Reliable and stable network</li>
                </ul>
              </Box>
            </Box>

            {/* Message */}
            <Box sx={{ mt: { xs: 2, sm: 4 } }}>
              <Typography sx={{ pb: 1 }}>
                Kindly leave us a message with any question or feedback you have
              </Typography>
              <TextField
                fullWidth
                name="message"
                value={formValues.message}
                onChange={handleTextFieldChange}
                placeholder="Type your message here..."
                variant="outlined"
                multiline
                minRows={5}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  }
                }}
              />
            </Box>

            {/* Submit Button */}
             <Box sx={{ pt: 4, display: 'flex', justifyContent: 'center' }}>
            <OrangeButton
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <CircularProgress 
                  size={24} 
                  sx={{ color: "white", mr: 1 }} 
                />
              ) : null}
              {isMobile ? "Submit Request" : "Submit Purchase/Inquiry Request"}
            </OrangeButton>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return null;
};

export default ServiceDetailsPage;