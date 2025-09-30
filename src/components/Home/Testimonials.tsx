import React from "react";
import { Box, Typography, Card, CardContent, Container, Stack } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Temiloluwa Olabamiji",
    position: "Principal, Proso Poyare Legal",
    feedback:
      "Their internet is incredibly fast, highly reliable, affordable, and always available. Keep up the excellent work, LinkOrgNet! I highly recommend your services to friends, family, and businesses.",
  },
  {
    name: "Mojisola Banjoko",
    position: "Administrator, Karen Walters Attorney",
    feedback:
      "I am highly satisfied with the services provided by LinkOrgNet. Their internet is fast, reliable, and consistently meets expectations. I would confidently recommend LinkOrgNet to my friends, family, and other businesses.",
  },
  {
    name: "Anita Jonathan",
    position: "Admin Assitant, Neubelle Med and Wellness Centre",
    feedback:
      "We are pleased with the services offered by LinkOrgnet. They consistently exceed our expectations and demonstrate exceptional efficiency in addressing any issues.",
  },
  {
    name: "Daniel Mensah",
    position: "CEO, Orbit Innovations",
    feedback:
      "LinkOrgNet offers remarkable value and reliable connectivity. Their innovative IT and telecom services have optimized our workflow.",
  },
];

export const Testimonials: React.FC = () => {
  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#010156",
        py: 8,
        color: "transparent",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/testimonialLine.png"
        alt="Eclipse"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "17%",
          zIndex: 1,
        }}
      />

      {/* Header Section */}
      <Typography
        variant="h6"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "rgba(255, 255, 255, 0.1)",
          px: 2,
          py: 1,
          border: ".5px solid #fff",
          borderRadius: "80px",
          fontFamily: "Helvetica",
          fontWeight: 200,
          fontSize: "20px",
          color: "#fff",
        }}
      >
        <img src="/images/icons/like.png" alt="like shape icon" width="11%" /> Customer Testimonials
      </Typography>

      {/* Background Images */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/mapped.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />

      {/* Eclipse Image */}
      <img
        src="/images/testimonialEc.png"
        alt="Eclipse"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "20%",
          zIndex: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Title and Description */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <img
            src="/images/gif/quotemark.gif"
            alt="quote icon"
            width="5%"
            style={{ marginTop: "-6%", transform: "scaleX(-1)" }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Museo Slab Bold",
              color: "#fff",
              fontSize: { xs: "1.3rem", sm: "1.6rem", md: "3.25rem" }, 
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Discover customers worldwide <br />love about our services
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          sx={{
            pl: { xs: 2, sm: 8 },
            mt: 1,
            mb: {xs:8, md:14},
            opacity: 0.8,
            fontFamily: "Helvetica",
            color: "#fff",
            fontSize: { xs: "14px", sm: "18px", md: "20px" }, 
            fontWeight: 200,
          }}
        >
          Here are some things our clients say about us worldwide:
          <br />
        </Typography>

        {/* Testimonials Slider */}
        <Box sx={{ mt: 4, px: 0, width: "110%", margin: "0 auto", position: "relative", zIndex: 2, left: "50%", transform: "translateX(-50%)" }}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Card
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    height: { xs: "auto", sm: "400px" }, 
                    width: "100%",
                    boxShadow:"none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 4,
                    textAlign: "left",
                    borderRadius: "32px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    // "&:hover": {
                    //   transform: "scale(1.05)",
                    // },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <img
                      src="/images/icons/quote.png"
                      alt="quote"
                      style={{ display: "inline", marginLeft: "-24px" }}
                    />{" "}
                    <Typography
                      variant="body1"
                      className="lefty smallText"
                      sx={{
                        fontSize: "16px",
                        opacity: 0.87,
                        fontFamily: "Inter",
                        textAlign: "left",
                        minHeight: "100px",
                        display: "inline",
                        lineHeight: 2,
                      }}
                    >
                      {testimonial.feedback}
                    </Typography>
                  </CardContent>
                  <Box sx={{ mt: 2, textAlign: "left" }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: "#E65D0f",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        lineHeight: 1.2,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ opacity: 0.7, fontFamily: "Inter", fontSize: "12px" }}
                    >
                      {testimonial.position}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};
