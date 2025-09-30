import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  useMediaQuery, 
  useTheme,
  styled 
} from '@mui/material';
import Wallet from "/images/icons/wallet.svg";
import ResidentialImage from "/images/svg/residential-wrap.svg";
import EnterpriseImage from "/images/svg/enterprise-wrap.svg";
import ResidentIcon from "/images/icons/residentIcon.svg";
import { Plan, FlowType, EnterpriseService } from '../../Service/features/serviceFlow/types';
import CloseIcon from '@mui/icons-material/Close';
import { resetServiceFlow } from '../../Service/features/serviceFlow/serviceFlowSlice';
import { useDispatch } from 'react-redux';  

interface PlanCardProps {
  selected?: boolean;
}

const PlanCard = styled(Box)<PlanCardProps>(({ selected }) => ({
  border: selected ? '1px solid #E65D0F' : '1px solid #D4D5DF',
  borderRadius: '8px',
  padding: '16px',
  cursor: 'pointer',
  backgroundColor: '#F9FAFB',
  '&:hover': {
    borderColor: selected ? '#E65D0F' : '#A0A0A0',
  },
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}));

interface ServicePlanSelectionPageProps {
  items: Plan[] | EnterpriseService[];
  selectedItem: Plan | EnterpriseService | null;
  onItemSelect: (item: Plan | EnterpriseService) => void;
  onNext: () => void;
  onBack: () => void;
  onFlowChange: (flowType: FlowType) => void;
  currentFlow: FlowType;
  onComplete: () => void; 
}

const ServicePlanSelectionPage: React.FC<ServicePlanSelectionPageProps> = ({ 
  items, 
  selectedItem, 
  onItemSelect, 
  currentFlow,
  onNext,
  onComplete,
 
}) => {
   const dispatch = useDispatch();  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getDisplayName = (name: string) => {
    if (currentFlow === 'residential') {
      const displayNames: Record<string, string> = {
        'Express': isMobile ? 'Express Plan' : 'Express Data Plan',
        'Super': isMobile ? 'Super Plan' : 'Super Data Plan',
        'Gold': isMobile ? 'Gold Plan' : 'Gold Data Plan',
        'Linkorg VIP1': isMobile ? 'VIP 1 Plan' : 'VIP 1 Data Plan',
        'Linkorg VIP2': isMobile ? 'VIP 2 Plan' : 'VIP 2 Data Plan',
        'Linkorg VIP3': isMobile ? 'VIP 3 Plan' : 'VIP 3 Data Plan'
      };
      return displayNames[name] || name;
    } else {
      const displayNames: Record<string, string> = {
        'fiber to office': 'Fiber-to-Office Internet Service',
        'voip': 'Voice Over Internet Protocol (VOIP)',
        'vsat': 'Satellite (VSAT) Connectivity Service',
        'storage': 'Data Storage Services',
        'data center': 'Data Centers & Collocation',
        'it': 'IT & Network Management Services'
      };
      return displayNames[name] || name;
    }
  };

  const getImageSource = () => {
    return currentFlow === 'residential' ? ResidentialImage : EnterpriseImage;
  };

  const getTitle = () => {
    return currentFlow === 'residential'
      ? isMobile ? "Select a Residential Data Plan" : "Select a Residential/SME Data Plan"
      : "Select your Enterprise Service";
  };

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
      borderRadius: "24px"
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
          src={getImageSource()}
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 1,
          }} 
        />
      </Box>

      {/* Right Content */}
      <Box sx={{
        width: { xs: "100%", sm: "510px" },
        height: '100%',
        minWidth: 320,
        p: { xs: 2, sm: 3 },
        outline: '1px #D9D9D9 solid',
        border: "1px solid #D9D9D9",
        display: 'flex',
        flexDirection: 'column',
      }}>
           <Box sx={{position:"absolute", top:"5px", right:"5px", width:"30px", height:"30px"}}>
         <CloseIcon  style={{width:"100%"}} onClick={handleClose}/>
        </Box> 
        {/* Right Selection Section */}
        <Box sx={{ backgroundColor: "#fff", width: "100%" }}>
          {/* Title with Icon */}
          <Box display="flex">
            <Box sx={{ 
              width: { xs: "40px", sm: "44px" }, 
              height: { xs: "40px", sm: "44px" },
              paddingRight: "8px"
            }}>
              <img src={ResidentIcon} alt="" style={{ width: "100%" }} />
            </Box>
            
            <Typography variant="h6" fontWeight={600} sx={{
              fontSize: { xs: "16px", sm: "24px" },
              letterSpacing: "-2%"
            }}>
              {getTitle()}
            </Typography>
          </Box>

          {/* Items List */}
          <Grid container spacing={1.5} mt={isMobile ? 2 : 4}>
            {items.map((item) => (
              <Grid item xs={6} key={item.id} sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <PlanCard
                  selected={selectedItem?.id === item.id}
                  onClick={() => !('comingSoon' in item) && onItemSelect(item)}
                  sx={{
                    opacity: 'comingSoon' in item ? 0.6 : 1,
                    pointerEvents: 'comingSoon' in item ? 'none' : 'auto',
                    position: 'relative'
                  }}
                >
    
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 1, 
                    alignItems: "flex-start", 
                    justifyContent: "center", 
                    height: "fit-content",
                    width: "100%"
                  }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      bgcolor: selectedItem?.id === item.id ? "#E65D0F" : "#D4D5DF", 
                      borderRadius: '50%' 
                    }} />
                    <Typography fontWeight={700} sx={{
                      color: selectedItem?.id === item.id ? "#E65D0F" : "#5D6771",
                      fontFamily: "Helvetica Neue Lt",
                      fontWeight:"400px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      height: "fit-content",
                      width: "100%",
                      paddingBottom: 0,
                      paddingTop:items.length > 0 && 'speed' in items[0] ? 0 : 2,
                      fontSize: { xs: currentFlow === 'residential' ? "14px" : "13px", sm: "16px" }
                    }}>
                      {getDisplayName(item.name)}
                    </Typography>
                    {'speed' in item && (
                      <Typography sx={{
                        color: selectedItem?.id === item.id ? "#E65D0F" : "#5D6771",
                        fontFamily: "Helvetica Neue Lt",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        height: "fit-content",
                        width: "100%",
                        marginTop: "-5px",
                        fontSize: { xs: "14px", sm: "16px" }
                      }}>
                        {item.speed}
                      </Typography>

                      
                    )}

                       {'price' in item && (
                      <Typography sx={{
                        color: selectedItem?.id === item.id ? "#E65D0F" : "#5D6771",
                        fontFamily: "Helvetica Neue",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        height: "fit-content",
                        width: "100%",
                        paddingTop: "5px",
                        fontSize: { xs: "16px", sm: "20px" }
                      }}>
                        ₦{item.price}
                      </Typography>

                      
                    )}
                  </Box>
                </PlanCard>
              </Grid>
            ))}
          </Grid>

          {/* Continue Button */}
          <Box mt={7} display="flex" justifyContent="center">
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: selectedItem ? "#E65D0F" : "#D4D5DF",
                borderRadius: 64,
                padding: 1.5,
                '&:hover': { backgroundColor: selectedItem ? "#D95D0A" : "#D4D5DF" },
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: selectedItem ? "pointer" : "not-allowed",
              }}
              disabled={!selectedItem}
              onClick={onNext}
            >
              <img src={Wallet} alt="" style={{ filter: "invert(1) brightness(200%)" }} />
              <Typography sx={{
                fontFamily: 'Museo Slab Medium',
                fontWeight: "600",
                textTransform: "none",
                fontSize: "16px"
              }}>
                Continue
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicePlanSelectionPage;