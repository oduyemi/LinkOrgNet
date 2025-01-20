import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Link } from "react-router-dom";



const Modal = ({ open, planName, planPrice, handleClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        internetPlan: planName,
        price: planPrice,
        howDidYouHear: ""
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            internetPlan: planName,
            price: planPrice,
        }));
    }, [planName, planPrice]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleClose();
    };

    if (!open) return null;

    return (
        <Dialog
            sx={{
                maxWidth: 500,
                maxHeight: "80vh",
                marginTop: "5%",
            }}
            className="mx-auto"
            open={true}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle className="blutext" sx={{ fontWeight: 500 }}>
                Confirm Your Plan
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            label="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            type="email"
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            required
                            type="tel"
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Full Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                            required
                            multiline
                            rows={4}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Internet Plan"
                            name="internetPlan"
                            value={formData.internetPlan}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Price"
                            name="price"
                            value={formData.price}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                    <Box mb={2}>
                        <FormControl fullWidth>
                            <InputLabel>How did you hear about us?</InputLabel>
                            <Select
                                name="howDidYouHear"
                                value={formData.howDidYouHear}
                                onChange={handleChange}
                                fullWidth
                                required
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="Search Engine">
                                    Search Engine
                                </MenuItem>
                                <MenuItem value="Social media">
                                    Social media
                                </MenuItem>
                                <MenuItem value="YouTube">YouTube</MenuItem>
                                <MenuItem value="Friend/family">
                                    Friend/family
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <DialogActions>
                        <Button type="submit" variant="contained" className="blu">
                            Submit
                        </Button>
                        <Button
                            onClick={handleClose}
                            variant="outlined"
                            className="blutext"
                        >
                            Close
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export const Search = () => {
    const [planName, setPlanName] = useState('');
    const [planPrice, setPlanPrice] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    // Handle the data plan selection
    const handlePlanChange = (event) => {
        const selectedPlan = event.target.value;
        let price = '';

        // Set price based on selected plan
        if (selectedPlan === 'express') {
            price = '₦16020';
        } else if (selectedPlan === 'super') {
            price = '₦18500';
        } else if (selectedPlan === 'gold') {
            price = '₦30000';
        } else if (selectedPlan === 'linkorgvip1') {
            price = '₦60000';
        } else if (selectedPlan === 'linkorgvip2') {
            price = '₦80000';
        }

        setPlanName(selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)); // Capitalize the first letter
        setPlanPrice(price);
    };

    // Handle modal open/close
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <Box className="container-fluid blu mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px", marginTop: "-1%" }}>
            <Box className="container">
                <Box className="row g-2">
                    <Box className="col-md-10">
                        <Box className="row g-2">
                            <Box className="col-md-4">
                                <input 
                                    type="text" 
                                    className="form-control border-0 py-3" 
                                    placeholder="Buy Retail & SME Internet Plan" />
                            </Box>
                            <Box className="col-md-4">
                                <select className="form-select border-0 py-3" onChange={handlePlanChange}>
                                    <option value="">Choose Data Plan</option>
                                    <option value="express">Express (Up to 20mbps)</option>
                                    <option value="super">Super (Up to 30mbps)</option>
                                    <option value="gold">Gold (Up to 60mbps)</option>
                                    <option value="linkorgvip1">LinkOrg VIP1 (Up to 70mbps)</option>
                                    <option value="linkorgvip2">LinkOrg VIP2 (Up to 100mbps)</option>
                                </select>
                            </Box>
                            <Box className="col-md-4">
                                <select className="form-select border-0 py-3" disabled>
                                    <option value="expressprice">{planName && `${planName} - ${planPrice}`}</option>
                                </select>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-md-2">
                        <Link
                            className="theme-btn theme-btn-3 border-0 w-100 py-3"
                            style={{ marginTop: "3px" }}
                            onClick={openModal}
                        >
                            Buy now
                        </Link>
                    </Box>
                </Box>
            </Box>

            {/* Modal for confirming the plan */}
            <Modal open={modalOpen} planName={planName} planPrice={planPrice} handleClose={closeModal} />
        </Box>
    );
};
