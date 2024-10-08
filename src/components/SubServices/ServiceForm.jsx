// import React from "react";
// import { Box, Typography } from "@mui/material";

// export const ServiceForm = () => {
//     return(
//         <Box className="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{marginTop: "4rem"}}>
//             <Box className="row justify-content-center">
//                 <Box className="col-lg-8">
//                     <Box className="bg-light text-center p-5">
//                         <Typography
//                             variant="h1"
//                             className="mb-4 blutext"
//                             sx={{
//                                 fontSize: "36px",
//                                 fontWeight: 800,
//                                 fontFamily: "montserrat"
//                             }}
//                         >
//                             Book Our Services
//                         </Typography>
//                         <form>
//                             <Box className="row g-3">
//                                 <Box className="col-12 col-sm-6">
//                                     <input
//                                         type="text"
//                                         className="form-control border-0"
//                                         placeholder="Your Name"
//                                         style={{height: "55px"}}
//                                     />
//                                 </Box>
//                                 <Box className="col-12 col-sm-6">
//                                     <input
//                                         type="text"
//                                         className="form-control border-0"
//                                         placeholder="Company Name"
//                                         style={{height: "55px"}}
//                                     />
//                                 </Box>
//                                 <Box className="col-12 col-sm-6">
//                                     <input
//                                         type="email"
//                                         className="form-control border-0"
//                                         placeholder="Your Email"
//                                         style={{height: "55px"}}
//                                     />
//                                 </Box>
//                                 <Box className="col-12 col-sm-6">
//                                     <input
//                                         type="text"
//                                         className="form-control border-0"
//                                         placeholder="Full Address"
//                                         style={{height: "55px"}}
//                                     />
//                                 </Box>
//                                 <Box className="col-12 col-sm-6">
//                                     <select className="form-select border-0" style={{height: "55px"}}>
//                                         <option selected>Select A Service</option>
//                                         <option value="1">VPN MPLS L2VPN</option>
//                                         <option value="2">VPN MPLS L3VPN</option>
//                                         <option value="3">Internet Enterprise</option>
//                                         <option value="3">Internet Retail</option>
//                                         <option value="3">VOIP</option>
//                                         <option value="3">Application Security</option>
//                                     </select>
//                                 </Box>
//                                 <Box className="col-12 col-sm-6">
//                                     <Box className="date" id="date1" data-target-input="nearest">
//                                         <input
//                                             type="text"
//                                             className="form-control border-0 datetimepicker-input"
//                                             placeholder="How did you hear about us?"
//                                             data-target="#date1"
//                                             style={{height: "55px"}}
//                                         />
//                                     </Box>
//                                 </Box>
//                                 <Box className="col-12">
//                                     <textarea className="form-control border-0" placeholder="Special Request"></textarea>
//                                 </Box>
//                                 <Box className="col-12">
//                                     <button className="theme-btn w-100 py-3" type="submit">Book Now</button>
//                                 </Box>
//                             </Box>
//                         </form>
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export const ServiceForm = () => {
  return (
    <Box
      className="position-relative wow fadeInUp"
      data-wow-delay="0.1s"
      sx={{
        marginTop: "4rem",
        width: "100%", // Full width of the page
        backgroundColor: "#f9f9f9", // Adjust background as needed
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        {/* Adjust the width to cover the entire page */}
        <Grid item xs={12}>
          <Box className="bg-light p-5">
            <Grid container spacing={4}>
              {/* Left column for image or GIF */}
              <Grid item xs={12} md={6}>
                <Box  sx={{marginTop:"70px"}}>
                  <img
                    src={require("../../assets/images/subservice/form.jpg")}
                    alt="Service Illustration"
                    style={{
                      width: "100%", // Ensures the image takes full width
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>

              {/* Right column for form */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  className="mb-4 blutext"
                  sx={{
                    fontSize: "36px",
                    fontWeight: 800,
                    fontFamily: "montserrat",
                  }}
                >
                  Book Our Services
                </Typography>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Company Name"
                        style={{ height: "55px" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Full Address"
                        style={{ height: "55px" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <select
                        className="form-select border-0"
                        style={{ height: "55px" }}
                      >
                        <option selected>Select A Service</option>
                        <option value="1">VPN MPLS L2VPN</option>
                        <option value="2">VPN MPLS L3VPN</option>
                        <option value="3">Internet Enterprise</option>
                        <option value="4">Internet Retail</option>
                        <option value="5">VOIP</option>
                        <option value="6">Application Security</option>
                      </select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="How did you hear about us?"
                        style={{ height: "55px" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Phone Number"
                        style={{ height: "55px" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="State"
                        style={{ height: "55px" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Local Government"
                        style={{ height: "55px" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <textarea
                        className="form-control border-0"
                        placeholder="Special Request"
                        style={{ height: "80px" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <button className="theme-btn w-100 py-3" type="submit">
                        Book Now
                      </button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
