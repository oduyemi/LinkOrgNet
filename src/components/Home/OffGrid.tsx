import { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../Service/features/serviceFlow/serviceFlowSlice';
import ServiceFlow from "../Modal/serviceFlow";
import { RootState } from '../../Service/store';
import { FlowType } from "../../Service/features/serviceFlow/types";
import Dialog from '@mui/material/Dialog';

interface ActionButtonProps {
  text: string;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hovered?: boolean;
}


export const ActionButton: React.FC<ActionButtonProps> = ({ text, onOpen, hovered=false }) => (
  <Button
    variant="contained"
    onClick={onOpen}
    className="org"
    sx={{
      color: '#fff',
      height: "48px",
      borderRadius: '64px',
      boxShadow: "none",
      padding: "4px 6px",
      fontSize: '16px',
      fontWeight: 600,
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      margin: "auto",
      width: { xs: "100%", sm: "85%" },
      backgroundColor: "#010156",
      position: "relative",
      left: { xs: "0%", sm: "14%" },
    }}
  >
    {text}
    <img 
      src={hovered ? "/images/icons/right_orange.png" : "/images/icons/right.png"}
      alt="Arrow Right" 
      width="8%" 
    />
  </Button>
);

const offgrid = [
  "/images/svg/plug1.svg",
  "/images/svg/plug2.svg",
];

const storage = [
  "/images/svg/storage.svg",
  "/images/svg/storage2.svg",
];


export const OffGrid: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.serviceFlow.isModalOpen);
  const [initialFlowType, setInitialFlowType] = useState<FlowType | undefined>(undefined);
  const [offgridIndex, setOffgridIndex] = useState(0);
  const [hoveredOffgrid, setHoveredOffgrid] = useState(false);
  // @ts-ignore: storageIndex is currently unused but reserved for future use
  const [storageIndex, setStorageIndex] = useState(0);
  const [hoveredStorage, setHoveredStorage] = useState(false);
  const [isMiddleHovered, setIsMiddleHovered] = useState(false);

  useEffect(() => {
    let interval: number;
    if (hoveredOffgrid) {
      interval = window.setInterval(() => {
        setOffgridIndex((prev) => (prev + 1) % offgrid.length);
      }, 1400);
    }
    return () => clearInterval(interval);
  }, [hoveredOffgrid]);

  useEffect(() => {
    let interval: number;
    if (hoveredStorage) {
      interval = window.setInterval(() => {
        setStorageIndex((prev) => (prev + 1) % storage.length);
      }, 1400);
    }
    return () => clearInterval(interval);
  }, [hoveredStorage]);

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
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
        gap: 3,
        p: { xs: 2, sm: 4 },
        mx: "auto",
        maxWidth: "1200px",
      }}
    >
      {/* First Card */}
      <Card
        sx={{
          borderRadius: "16px",
          p: 3,
          backgroundColor: "#FAFAFC",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          '&:hover': {
            transform: "translateY(-5px)",
            backgroundColor: "#010156",
          },
        }}
        onMouseEnter={() => setHoveredOffgrid(true)}
        onMouseLeave={() => setHoveredOffgrid(false)}
      >
        <CardContent sx={{ flex: 2, display: "flex", flexDirection: "column" }}>
          <Box mb={2} display="flex" flexDirection="column" alignItems="left">
            <img
              src={hoveredOffgrid ? "/images/icons/offgrid.png" : "/images/icons/bluoffgrid.png"}
              alt="offgrid"
              className="smallerIcons"
              width="50px"
            />
            <Typography
              variant="h5"
              color={hoveredOffgrid ? "#fff" : "#010156"}
              mt={1}
              sx={{
                fontFamily: "Museo Slab Bold",
                textAlign: "left",
                fontSize: { xs: "16px", sm: "24px" },
              }}
            >
              In Remote Locations?<br />Stay Connected
            </Typography>
          </Box>
          <Box
            sx={{
              width: "120%",
              maxWidth: "500px",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              height: "120px",
              alignSelf: "center",
            }}
          >
            <AnimatePresence>
              <motion.img
                key={offgridIndex}
                src={offgrid[offgridIndex]}
                alt="Off grid animation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                style={{
                  width: "100%",
                  left: 0,
                  objectFit: "cover",
                  borderRadius: "8px",
                  position: "absolute",
                  top: 0,
                }}
              />
            </AnimatePresence>
          </Box>
        </CardContent>
      </Card>

      {/* Middle Card */}
        <Card
          sx={{
            borderRadius: "16px",
            p: 3,
            backgroundColor: "#FAFAFC",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            '&:hover': {
              backgroundColor: "#010156",
              transform: "translateY(-5px)",
            },
            "&:hover .org": {
              color: "#e65d0f",
              backgroundColor: "#fff",
            },
          }}
          onMouseEnter={() => setIsMiddleHovered(true)}
          onMouseLeave={() => setIsMiddleHovered(false)}
        >
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              className="hoverText"
              sx={{
                mt: 1,
                mb: { xs: 4, sm: 5 },
                fontFamily: isMiddleHovered ? "Museo Slab Bold" : "Museo Slab Medium",
                fontSize: isMiddleHovered ? { xs: "24px", sm: "30px" } : { xs: "20px", sm: "24px" },
                color: isMiddleHovered ? "#fff" : "#010156",
                textAlign: "left",
                transition: "color 0.3s ease",
              }}
            >
              {isMiddleHovered
                ? "Discover our services, made just for you"
                : "Switch to high-speed internet today. Get connected"}
            </Typography>
            <Box
              sx={{
                textAlign: { xs: "center", sm: "left" },
                ml: { xs: 0, sm: -10 },
                mt: { xs: 2, sm: 0 },
              }}
            >
              <ActionButton
                text="Get Connected"
                onOpen={(event: React.MouseEvent<HTMLButtonElement>) =>
                  handleOpenModal(event, "residential")
                }
                hovered={isMiddleHovered}
              />
            </Box>
          </CardContent>
        </Card>

      {/* Modal Dialog */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="lg"
        sx={{ "& .MuiPaper-root": { borderRadius: '24px' } }}
      >
        <ServiceFlow initialFlow={initialFlowType} onComplete={handleCloseModal} />
      </Dialog>

      {/* Third Card */}
      <Card
        sx={{
          borderRadius: "16px",
          p: 3,
          backgroundColor: "#FAFAFC",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          '&:hover': {
            transform: "translateY(-5px)",
            backgroundColor: "#010156",
          },
        }}
        onMouseEnter={() => setHoveredStorage(true)}
        onMouseLeave={() => setHoveredStorage(false)}
      >
        <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "left" }}>
          <Box mb={2} display="flex" flexDirection="column" alignItems="left">
            <img
              src={hoveredStorage ? "/images/icons/handleData.png" : "/images/icons/bluhandledata.png"}
              className="smallerIcons"
              alt="Handle Data"
              width="50px"
            />
            <Typography
              variant="h5"
              color={hoveredStorage ? "#fff" : "#010156"}
              mt={1}
              sx={{
                fontFamily: "Museo Slab Bold",
                fontSize: { xs: "16px", sm: "24px" },
                textAlign: "left",
              }}
            >
              Enjoy Unlimited <br />Data for 30 Days
            </Typography>
          </Box>

          {/* Image animation on card hover */}
          <Box
            sx={{
              width: "120%",
              maxWidth: "500px",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              height: "120px",
              alignSelf: "center",
            }}
          >
            <img
              src={hoveredStorage ? storage[1] : storage[0]}
              alt="Storage Illustration"
              style={{
                width: "100%",
                left: 0,
                objectFit: "cover",
                borderRadius: "8px",
                position: "absolute",
                top: 0,
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};