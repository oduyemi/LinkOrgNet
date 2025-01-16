import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";



export const Search = () => {
    return(
        <Box className="container-fluid blu mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px", marginTop: "-1%" }}>
            <Box className="container">
                <Box className="row g-2">
                    <Box className="col-md-10">
                        <Box className="row g-2">
                            <Box className="col-md-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Search Data Plan" />
                            </Box>
                            <Box className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Internet Service Type</option>
                                    <option value="ftth">Fiber-to-Home (FTTH) </option>
                                    <option value="ftto">Fiber-to-Office (FTTO)</option>
                                    <option value="wireless">Wireless Connectivity</option>
                                    <option value="telephony">Remote Telephony</option>
                                </select>
                            </Box>
                            <Box className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="ph">Port Harcourt</option>
                                    <option value="fct">Abuja</option>
                                    <option value="other">Other</option>
                                </select>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-md-2">
                        <Link className="theme-btn theme-btn-3 border-0 w-100 py-3" style={{ marginTop: "3px"}}>Search</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}