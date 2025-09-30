import { Box, Paper, Grid, Typography } from "@mui/material";

const teamMembers = [
  { name: "Sarah Scott", role: "Chief Operating Officer, COO" },
  { name: "Mobolaji Bolarinwa", role: "General Manager, GM" },
  { name: "Gbenga Ogunniran", role: "Chief Technical Officer, CTO" },
  { name: "Abayomi Daramola", role: "Chief Sales Officer, CSO" }
];

export const Excos = () => {
  return (
    <>
      <Box boxShadow="none">
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={12} mt={4} mb={4}>
            <Paper
              elevation={1}
              sx={{
                padding: "16px",
                borderRadius: "24px",
                textAlign: "left",
                background: "#E6EAEE",
                boxShadow: "none",
                height: "180px",
                maxWidth: "1000px",
                margin: "auto",
                transition: "all 0.3s ease-in-out",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                  background: "#010156",
                  "& h6": { color: "#E75D11" },
                  "& p": { color: "#ffffff" },
                  "& .iconBox": { background: "#ffffff" },
                  "& .badgeImg": { content: 'url("/images/lightBadge.png")' },
                  "& .ceoIcon": { content: 'url("/images/icons/memberIconLight.png")' } 
                },
              }}
            >
              {/* Left Side (Text & Icon) */}
              <Box display="flex" flexDirection="column">
                <Box
                  className="iconBox"
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#979797",
                  }}
                >
                  <img src="/images/icons/memberIconDark.png" className="ceoIcon" alt="member" width="75%" />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Museo Slab Bold",
                    fontWeight: 400,
                    fontSize: {xs:"16px", sm:"22px"},
                    color: "#010156",
                    marginTop: "10px",
                    lineHeight:"116.865%",
                    letterSpacing:"-0.96px"
                  }}
                >
                  Adewunmi Samson Anjorin
                </Typography>

                <Typography
                  mt={0.5}
                  sx={{
                    color: "#333E49",
                    fontFamily: "Inter",
                    fontSize: {xs:"12px", sm:"16px"},
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "32px",
                    letterSpacing: "-0.563px",
                  }}
                >
                  Managing Director / Chief Executive Officer (CEO)
                </Typography>
              </Box>

              {/* Right Side (Badge) */}
              <Box>
                <img
                  src="/images/darkBadge.png"
                  alt="CEO"
                  className="badgeImg"
                  width="18%"
                  style={{ marginLeft: "40%"}}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>


      <Box display="flex" justifyContent="center" width="100%">
        <Grid container spacing={4} sx={{ maxWidth: "1000px", justifyContent: "center" }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Paper
                elevation={1}
                sx={{
                  padding: "16px",
                  borderRadius: "24px",
                  textAlign: "left",
                  background: "#E6EAEE",
                  boxShadow: "none",
                  height: "184px",
                  maxWidth: "800px",
                  margin: "auto",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "#010156",
                    "& h6": { color: '#E75D11' },
                    "& p": { color: "#ffffff" },
                    "& .iconBox": { background: "#ffffff" },
                    "& .staff": { content: 'url("/images/icons/memberIconLight.png")' } 
                  },
                }}
              >
                <Box
                  className="iconBox"
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#D4D5DF",
                  }}
                >
                  <img src="/images/icons/memberIconDark.png" className="staff" alt="member" width="75%" />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Museo Slab Bold",
                    fontWeight: "400",
                    fontSize: {xs:"16px", sm:"20px", md:"22px"},
                    color: "#010156",
                    marginTop: "10px",
                    fontStyle: "normal",
                    lineHeight: "116.865%",
                    letterSpacing: "-0.72px",
                                      }}
                >
                  {member.name}
                </Typography>

                <Typography
                  mt={0.5}
                  sx={{
                    color: "#333E49",
                    fontFamily: "Inter",
                    fontSize: {xs:"14px", sm:"16px"},
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "32px",
                    letterSpacing: "-0.563px",
                  }}
                >
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
