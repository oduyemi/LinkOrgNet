import React, { useState } from "react";
import { Box, Dialog, DialogContent, Typography, IconButton, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from 'swiper/modules';
import CloseIcon from "@mui/icons-material/Close";

const images = [
  { src: "/images/gallery/suitup.png", description: "Some members of the Team LinkOrgNet" },
  { src: "/images/gallery/induction_group.jpg", description: "Induction/Training for staff" },
  { src: "/images/gallery/salesteam.jpg", description: "LinkOrg Sales team at an event" },
  // { src: "/images/gallery/cto.png", description: "CTO, LinkOrgNet" },
  // { src: "/images/gallery/azer.png", description: "MD with partners from Azercosmos" },
  { src: "/images/gallery/boardroom.png", description: "Regular Stand-up meeting" },
  // { src: "/images/gallery/md_cso.png", description: "Office Surprise Birthday" },
  // { src: "/images/gallery/saconf.png", description: "South Africa Conference" },
  
];

const CurvedContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  padding: theme.spacing(6, 0),
  background: "white",

  // The top and bottom curves
  ":before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px", // Default height for larger screens
    background: "#010156",
    transform: "translateY(-50%)",
    borderRadius: "0 0 100% 100%",
    [theme.breakpoints.down("md")]: {
      height: "60px", // Smaller height for medium screens (tablets)
    },
    [theme.breakpoints.down("sm")]: {
      height: "50px", // Smaller height for mobile screens
    },
  },

  ":after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "4px", // Default height for larger screens
    background: "#010156",
    transform: "translateY(50%)",
    borderRadius: "100% 100% 0 0",
    [theme.breakpoints.down("md")]: {
      height: "60px", // Smaller height for medium screens (tablets)
    },
    [theme.breakpoints.down("sm")]: {
      height: "50px", // Smaller height for mobile screens
    },
  },
}));



const ImageBox = styled(Box)({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; description: string } | null>(null);

  const handleOpen = (image: { src: string; description: string }) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <CurvedContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageBox onClick={() => handleOpen(image)}>
              <img src={image.src} alt={`Gallery ${index + 1}`} />
            </ImageBox>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          {selectedImage && (
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* Close Button */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 10,
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              <img
                src={selectedImage.src}
                alt="Enlarged View"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  maxWidth: "800px",
                }}
              />
              <Typography variant="h6" mt={2}>
                {selectedImage.description}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </CurvedContainer>
  );
};
