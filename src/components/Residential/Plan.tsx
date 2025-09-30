import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Chip,
  Stack,
  Button,
  Dialog,
} from "@mui/material";
import BuyLine3 from "/images/lines/buy-line3.svg";
import BuyLine2 from "/images/lines/buy-line2.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
} from "../../Service/features/serviceFlow/serviceFlowSlice";
import ServiceFlow from "../Modal/serviceFlow";
import { RootState } from "../../Service/store";
import { FlowType } from "../../Service/features/serviceFlow/types";
import { ActionButton } from "../Home/HeroSection";
import Arrow1 from "/images/icons/arrow1.svg";
import Arrow2 from "/images/icons/arrow2.svg";
import { FiberToHomeFeatures } from "./Features/FiberToHomeFeatures";
import { EstateFeatures } from "./Features/EstateFeatures";

const planDetails = {
  "Estate Connect": {
    label: "Estate Connect",
    icon: "/images/houseblue.png",
    hoverIcon: "/images/house.png",
    description:
      "Connect entire residential communities with high-speed internet access. Available for housing estates, apartment buildings, and high-rise residential apartments.",
    image: "/images/svg/estateCards.svg",
    buttonText: "Get Estate Connect",
    flowType: "enterprise" as FlowType,
  },
  "Fiber-to-Home": {
    label: "Fiber-to-Home",
    icon: "/images/houseblue.png",
    hoverIcon: "/images/house.png",
    description:
      "Enjoy high-speed internet from 35mbps - 150 mbps with affordable data plans that keep you connected to the rest of the world from the comfort of your home.",
    image: "/images/svg/homeCards.svg",
    buttonText: "Buy a residential data plan",
    flowType: "residential" as FlowType,
  },
} as const;

export const ResidentialPlan: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: RootState) => state.serviceFlow.isModalOpen
  );
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof planDetails>(
    "Estate Connect"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialFlowType, setInitialFlowType] = useState<FlowType | undefined>(
    undefined
  );

  const planKeys = Object.keys(planDetails) as (keyof typeof planDetails)[];

  const handlePrev = () => {
    const newIndex =
      activeIndex === 0 ? planKeys.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    setSelectedPlan(planKeys[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      activeIndex === planKeys.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    setSelectedPlan(planKeys[newIndex]);
  };

  const handleOpenModal = (
    event: React.MouseEvent<HTMLButtonElement>,
    flowType: FlowType
  ) => {
    event.preventDefault();
    setInitialFlowType(flowType);
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    setInitialFlowType(undefined);
  };

  return (
    <Box marginLeft="8%" sx={{ marginTop: "20px", position:"relative" }}>
     


      {/* Header Chip */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          background: "#F2F7F8",
          border: "1px solid #D4D5DF",
          padding: "0px 16px",
          height: "40px",
          borderRadius: "80px",
          width: { xs: "240px", sm: "272px" },
        }}
      >
        <Box>
          <img
            src="images/icons/house.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </Box>
        <Typography
          sx={{
            color: "#010156",
            fontFamily: "Helvetica",
            fontSize: { xs: "12px", sm: "15.7px" },
            fontWeight: 400,
          }}
        >
          Residential Internet Plans
        </Typography>
      </Box>

      {/* Section Title */}
      <Box sx={{ display: "flex", margin: "24px 0px", flexDirection: {xs:"column", sm:"row"} }}>
        <Box>
          <Typography
            variant="h4"
            className="mobileheading moveleft"
            sx={{
              color: "#010156",
              width:{xs:"100%", sm:"70%", md:"87%"},
              fontFamily: "Museo Slab Medium",
              lineHeight: "117%",
              fontWeight: 600,
              display:"inline"
            }}
          >
            Explore our residential{" "}
            <span style={{ color: "#E65D0F" }}>internet</span>{" "}
            plans –
            <br className="remove"/> tailored
            <span style={{ color: "#E65D0F", display: "inline" }}>
              {" "}
              for estates, homes and your lifestyle
            </span>
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            position: "relative",
            mt: {xs:2, sm:-2},
            display: "flex",
            marginLeft: {xs:"-60px", sm:"30px", md:"17%"},
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              marginLeft: "0.65%",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Button onClick={handlePrev}>
                <Box
                  sx={{
                    width: { xs: "48.73px", sm: "66.67px" },
                    height: { xs: "48.73px", sm: "66.67px" },
                  }}
                >
                  <img src={Arrow2} alt="Previous" style={{ width: "100%" }} />
                </Box>
              </Button>
              <Button onClick={handleNext}>
                <Box
                  sx={{
                    width: { xs: "48.73px", sm: "66.67px" },
                    height: { xs: "48.73px", sm: "66.67px" },
                  }}
                >
                  <img src={Arrow1} alt="Next" style={{ width: "100%" }} />
                </Box>
              </Button>
            </Box>

            {/* Dots */}
            <Box sx={{ display: "flex", gap: 1, mt: 2, }}>
              {planKeys.map((plan) => (
                <Box
                  key={plan}
                  sx={{
                    mt:-2,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor:
                      selectedPlan === plan ? "#010156" : "#e0e7ff",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Background Lines */}
      <Box
        sx={{
          position: "absolute",
          top: "1050px",
          left: 0,
          zIndex: "-1",
           display:{xs:"none", sm:"none", md:"flex"},
        }}
      >
        <img src={BuyLine3} alt="" />
      </Box>
      
    <Box
        sx={{
          position: "absolute",
          top: "1100px",
          left: "1150px",
          zIndex: "-1",
           display:{xs:"none", sm:"none", md:"flex"},
        }}
      >
        <img src={BuyLine2} alt="" />
      </Box>

      {/* Plan Chips */}
      <Stack
        className="remove"
        direction="row"
        spacing={2}
        mt={3}
        sx={{ flexWrap: "wrap", justifyContent: "left" }}
      >
        {planKeys.map((planKey) => {
          const isSelected = selectedPlan === planKey;

          return (
            <Chip
              key={planKey}
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    component="img"
                    src={isSelected ? planDetails[planKey].hoverIcon : planDetails[planKey].icon}
                    alt={`${planDetails[planKey].label} icon`}
                    sx={{ width: 18, height: 18 }}
                  />
                  <span>{planDetails[planKey].label}</span>
                </Box>
              }
              onClick={() => {
                setSelectedPlan(planKey);
                setActiveIndex(planKeys.indexOf(planKey));
              }}
              sx={{
                bgcolor: isSelected ? "#E65D0F" : "transparent",
                borderColor: isSelected ? "#E65D0F" : "#F2F7F8",
                borderWidth: "1px",
                borderStyle: "solid",
                color: isSelected ? "white" : "#1e3a8a",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: isSelected ? "#e65d0f" : "#f0f0f0",
                },
              }}
            />
          );
        })}
      </Stack>

      {/* Plan Display Card */}
      <Paper
        sx={{
          width: "90%",
          display: "flex",
          background: "#F2F7F8",
          borderRadius: "12px",
          boxShadow: "none",
          marginTop: "50px",
          height: "457px",
          flexDirection: { xs: "column", sm: "row" },
          padding: { xs: "16px", sm: "0px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "45%" },
            margin: { xs: "0px", sm: "54px 54px" },
            textAlign: "left",
          }}
        >
          <img
            src="/images/icons/highspeed.png"
            width="10%"
            alt="internet"
          />
          <Typography
            variant="h5"
            fontWeight="bold"
            className="moveleft"
            sx={{
              fontSize: { xs: "28px", sm: "40px" },
              fontFamily: "Museo Slab Medium",
              fontWeight: 600,
              color: "#010156",
              padding: "16px 0px",
            }}
          >
            {planDetails[selectedPlan].label}
          </Typography>

          <Typography
            sx={{
              color: "#333E49",
              fontFamily: "inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "140%",
              paddingTop: "8px",
            }}
          >
            {planDetails[selectedPlan].description}
          </Typography>

          <ActionButton
            text={planDetails[selectedPlan].buttonText}
            onOpen={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleOpenModal(event, planDetails[selectedPlan].flowType)
            }
          />
        </Box>

        <Box
        className="remove"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: { xs: "100%", sm: "55%" },
            backgroundImage: 'url("/images/lines/service-line.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            src={planDetails[selectedPlan].image}
            alt={`${selectedPlan} Illustration`}
            style={{ maxHeight: "90%", width: "auto" }}
          />
        </Box>
      </Paper>       
        {selectedPlan === "Fiber-to-Home" ? <FiberToHomeFeatures /> : <EstateFeatures />}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="lg"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "24px",
          },
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
