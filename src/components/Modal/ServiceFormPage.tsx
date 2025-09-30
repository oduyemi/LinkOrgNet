import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Avatar,
  InputLabel,
  Select,
  MenuItem,
  styled
} from '@mui/material';
import { useMediaQuery, useTheme } from "@mui/material";

// Images
import ResidentialImage from "/images/svg/residential-wrap.svg";
import EnterpriseImage from "/images/svg/enterprise-wrap.svg";
import Wallet from "/images/icons/wallet.svg";
import ResidentIcon from "/images/icons/residentIcon.svg";
import EnterpriseIcon from "/images/icons/enterpriseIcon.svg";
import CloseIcon from '@mui/icons-material/Close';
import { resetServiceFlow } from '../../Service/features/serviceFlow/serviceFlowSlice';

// Redux
import { 
  selectCurrentFlow,
  selectFormValues,
  selectIsFormValid
} from '../../Service/features/serviceFlow/selectors';
import {
  setResidentialStep,
  setEnterpriseStep
} from '../../Service/features/serviceFlow/serviceFlowSlice';
import { AppDispatch } from '../../Service/store';
import { FormValues } from '../../Service/features/serviceFlow/types';
import { SelectChangeEvent } from '@mui/material';
import { 
  updateFormValues,
} from '../../Service/features/serviceFlow/serviceFlowSlice';
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
  maxWidth: 400,
  fontFamily: 'Museo Slab Medium',
  fontWeight: "600",
  textTransform: "none",
  fontSize: "16px",
  '&:disabled': {
    backgroundColor: '#D4D5DF',
    opacity: 0.7,
  }

}));

interface ServiceFormPageProps {
  onNext: () => void;
  isSubmitting?: boolean;
  error?: string | null; 
  onComplete: () => void;  
}

const ServiceFormPage: React.FC<ServiceFormPageProps> = ({ onNext, isSubmitting, error, onComplete, }) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  



    // Selectors
    const currentFlow = useSelector(selectCurrentFlow);
    const formValues = useSelector(selectFormValues);
    const isFormValid = useSelector(selectIsFormValid);



  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    dispatch(updateFormValues({ [name as keyof FormValues]: value }));
  };
  
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target as { name: keyof FormValues; value: string };
    dispatch(updateFormValues({ [name]: value }));
  };


  const handleContinue = () => {
    if (currentFlow === 'residential') {
      dispatch(setResidentialStep(2)); 
    } else if (currentFlow === 'enterprise') {
      dispatch(setEnterpriseStep(2)); 
    }
  };

    const handleClose = () => {
        dispatch(resetServiceFlow());
        onComplete();
      };

  if (currentFlow === 'residential') {
    return (
      <Box sx={{
        alignSelf: 'stretch',
        height: 630,
        display: 'flex',
        alignItems: 'center',
        flexDirection: {xs: "column", sm: "row"},
        borderRadius: "24px"
      }}>
        {/* Left Image */}
        <Box sx={{
          width: 510,
          height: '100%',
          minWidth: 320,
          p: 3,
          outline: '1px #D9D9D9 solid',
          display: {xs: "none", sm: "flex"},
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
          width: {xs: "100%", sm: "510px"},
          height: '100%',
          p: {xs: 2, sm: 3},
          border: { xs: "none", sm: "1px solid #D9D9D9" }, 
          display: 'flex',
          flexDirection: 'column',
        }}>

<Box sx={{position:"absolute", top:"5px", right:"5px", width:"30px", height:"30px"}}>
         <CloseIcon  style={{width:"100%"}} onClick={handleClose}/>
        </Box> 
          <Box sx={{ display: 'flex', gap: 1 }}>
             

             <Box sx={{ 
              width: { xs: "40px", sm: "44px" }, 
              height: { xs: "40px", sm: "44px" },
              paddingRight: "8px"
            }}>
              <img src={ResidentIcon} alt="" style={{ width: "100%" }} />
              </Box>

            <Typography variant="h6" fontWeight={600} sx={{fontSize: {xs: "16px", sm: "24px"}, letterSpacing: "-2%"}}>
                {isMobile ? "Get a Residential Data Plan" : "Get a Residential/SME Data Plan"}
              </Typography>

           </Box>


          <Typography color="text.secondary">
              Provide your details to get feedback from our sales team
            </Typography>
          
          <Box sx={{ pt: 2, pb: {xs: 1, sm: 2}, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> FirstName </InputLabel> 
                <TextField 
                  fullWidth 
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your first name" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.firstName} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> LastName </InputLabel> 
                <TextField 
                  fullWidth 
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your last name" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.lastName}
                />
              </Grid>
            </Grid>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Email </InputLabel> 
                <TextField 
                  fullWidth 
                  name="email"
                  value={formValues.email}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your email address" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Phone Number </InputLabel> 
                <TextField 
                  fullWidth 
                  name="phone"
                  value={formValues.phone}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your phone no" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.phone}
                />
              </Grid>
            </Grid>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Company Name (Optional) </InputLabel> 
                <TextField 
                  fullWidth 
                  name="company"
                  value={formValues.company}
                  onChange={handleTextFieldChange}
                  placeholder="Enter company name" 
                  variant="outlined" 
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Job Title (Optional) </InputLabel> 
                <TextField 
                  fullWidth 
                  name="jobTitle"
                  value={formValues.jobTitle}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your job title" 
                  variant="outlined" 
                  size="small"
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <InputLabel sx={{ color: "#1E1E1E", padding: "0px 10px", fontSize: { xs: "14px", sm: "16px" } }}>
                Grand Plan
              </InputLabel>
              <Select
                fullWidth
                name="grandPlan"
                value={formValues.grandPlan}
                onChange={handleSelectChange}
                displayEmpty
                variant="outlined"
                size="small"
                error={!!error && !formValues.grandPlan}
              >
                <MenuItem value="" disabled>
                  Select your grand plan
                </MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="residential">Residential</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} sm={12}>
              <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Address </InputLabel> 
              <TextField
                fullWidth
                name="address"
                value={formValues.address}
                onChange={handleTextFieldChange}
                placeholder="Enter your company address"
                variant="outlined"
                multiline
                rows={1}
                error={!!error && !formValues.address}
              />
            </Grid>
            
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

            <Box sx={{ pt: 3, pb: 3, display: 'flex', justifyContent: 'center' }}>
              <OrangeButton 
                onClick={onNext}  
                disabled={!isFormValid || isSubmitting}
              >
                 <img 
                    src={Wallet} 
                    alt=""  
                    style={{ filter: "invert(1) brightness(200%)", paddingRight: "10px" }}  
                  />
                   Continue
                   </OrangeButton>
            </Box>

          </Box>
        </Box>
      </Box>
    );
  }

  if (currentFlow === 'enterprise') {
    return (
      <Box sx={{
        alignSelf: 'stretch',
        height: 630,
        display: 'flex',
        alignItems: 'center',
        flexDirection: {xs: "column", sm: "row"},
        borderRadius: "24px"
      }}>
        {/* Left Image */}
        <Box sx={{
          width: 510,
          height: '100%',
          minWidth: 320,
          p: 3,
          outline: '1px #D9D9D9 solid',
          display: {xs: "none", sm: "flex"},
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
          width: {xs: "100%", sm: "510px"},
          height: '100%',
          p: {xs: 2, sm: 3},
          border: { xs: "none", sm: "1px solid #D9D9D9" }, 
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box sx={{position:"absolute", top:"5px", right:"5px", width:"30px", height:"30px"}}>
         <CloseIcon  style={{width:"100%"}} onClick={handleClose}/>
        </Box> 
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <GradientAvatar>
                <img src={EnterpriseIcon} alt="" />
              </GradientAvatar>
              <Typography variant="h6" fontWeight={600} sx={{fontSize: {xs: "16px", sm: "24px"}, letterSpacing: "-2%"}}>
              {isMobile ? "Enterprise Service Form" : "Enterprise Service Request Form"}
              </Typography>
            </Box>
            <Typography color="text.secondary">
              Provide your details to get feedback from our sales team
            </Typography>
          </Box>
          
          <Box sx={{ pt: 2, pb: {xs: 1, sm: 2}, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> FirstName </InputLabel> 
                <TextField 
                  fullWidth 
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your first name" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> LastName </InputLabel> 
                <TextField 
                  fullWidth 
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your last name" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.lastName}
                />
              </Grid>
            </Grid>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Email </InputLabel> 
                <TextField 
                  fullWidth 
                  name="email"
                  value={formValues.email}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your email address" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Phone Number </InputLabel> 
                <TextField 
                  fullWidth 
                  name="phone"
                  value={formValues.phone}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your phone no" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.phone}
                />
              </Grid>
            </Grid>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Company Name </InputLabel> 
                <TextField 
                  fullWidth 
                  name="company"
                  value={formValues.company}
                  onChange={handleTextFieldChange}
                  placeholder="Enter company name" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.company}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Job Title </InputLabel> 
                <TextField 
                  fullWidth 
                  name="jobTitle"
                  value={formValues.jobTitle}
                  onChange={handleTextFieldChange}
                  placeholder="Enter your job title" 
                  variant="outlined" 
                  size="small"
                  error={!!error && !formValues.jobTitle}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel sx={{color: "#1E1E1E", padding: "0px 10px", fontSize: {xs: "14px", sm: "16px"}}}> Office Address </InputLabel> 
              <TextField
                fullWidth
                name="address"
                value={formValues.address}
                onChange={handleTextFieldChange}
                placeholder="Enter your company address"
                variant="outlined"
                multiline
                rows={2}
                error={!!error && !formValues.address}
              />
            </Grid>
            
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

            <Box sx={{ pt: 3, pb: 3, display: 'flex', justifyContent: 'center' }}>
              <OrangeButton 
                onClick={handleContinue}
                disabled={!isFormValid}
              >
                <img 
                  src={Wallet} 
                  alt=""  
                  style={{ filter: "invert(1) brightness(200%)", paddingRight: "10px" }}  
                />
                Continue
              </OrangeButton>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return null;
};

export default ServiceFormPage;
