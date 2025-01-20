import React, { useState } from "react";
import { Box, Typography, Grid, Button, Modal, TextField, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import "../../../assets/css/table.css";

export const RetailPricingTable = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [formValues, setFormValues] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        heardFrom: "",
        agreeToNewsletter: false,
        additionalNote: "",
    });

    const openModal = (planName) => {
        setSelectedPlan(planName);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setFormValues({ ...formValues, agreeToNewsletter: e.target.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        closeModal();
    };

    return (
        <Box id="pricing" className="row mt-5">
            <Grid container spacing={4}>
                {pricingPlans.map((plan, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box className={`pricing-table-3 ${plan.type}`}>
                            <Box className="pricing-table-header">
                                <Typography variant="h5" component="h4" className="text-center">
                                    <strong>{plan.name}</strong>
                                </Typography>
                                <Typography variant="subtitle1" className="text-center">
                                    {plan.speed}
                                </Typography>
                            </Box>
                            <Box className="price text-center">
                                <Typography variant="h6" component="p">
                                    <strong>&#8358;{plan.price}</strong> / MONTH
                                </Typography>
                            </Box>
                            <Box className="pricing-body">
                                <ul className="pricing-table-ul">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className={feature.available ? "" : "not-avail"}>
                                            <i className={feature.icon}></i> {feature.text}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="contained" className="blu px-5" onClick={() => openModal(plan.name)}>
                                    Buy Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Modal open={modalIsOpen} onClose={closeModal}>
    <Box
        sx={{
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
            maxWidth: 500,
            maxHeight: '80vh', 
            overflowY: 'auto',
            margin: 'auto',
            mt: '5%',
        }}
    >
        <Typography variant="h6" sx={{ fontWeight: "600" }} component="h2" className="blutext" gutterBottom>
            Buy {selectedPlan}
        </Typography>
        <form onSubmit={handleSubmit}>
            <TextField label="Full Name" name="fullName" value={formValues.fullName} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="Company" name="company" value={formValues.company} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Email" name="email" value={formValues.email} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="Phone" name="phone" value={formValues.phone} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="Full Address" name="address" value={formValues.address} onChange={handleChange} fullWidth required multiline rows={4} margin="normal" />
            <TextField label="Internet Plan" value={selectedPlan} fullWidth InputProps={{ readOnly: true }} margin="normal" />
            <FormControl fullWidth margin="normal">
                <InputLabel>How did you hear about us?</InputLabel>
                <Select name="heardFrom" value={formValues.heardFrom} onChange={handleChange}>
                    <MenuItem value="Search Engine">Search Engine</MenuItem>
                    <MenuItem value="Social media">Social media</MenuItem>
                    <MenuItem value="YouTube">YouTube</MenuItem>
                    <MenuItem value="Friend/Family">Friend/Family</MenuItem>
                </Select>
            </FormControl>
            <TextField label="Additional Note" name="additionalNote" value={formValues.additionalNote} onChange={handleChange} fullWidth multiline rows={4} margin="normal" />
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={formValues.agreeToNewsletter} onChange={handleCheckboxChange} required />} label="I agree to receiving newsletters" />
            </FormGroup>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button type="submit" variant="contained" className="blu">
                    Submit
                </Button>
                <Button onClick={closeModal} variant="outlined" className="blutext">
                    Close
                </Button>
            </Box>
        </form>
    </Box>
</Modal>
        </Box>
    );
};

const pricingPlans = [
    {
        name: "EXPRESS",
        speed: "Up to 20 mbps",
        price: "16020",
        type: "basic",
        features: [
            { text: "4+ Connected Devices", icon: "fa fa-send", available: true },
            { text: "Unlimited Downloads", icon: "fa fa-cloud", available: true },
            { text: "HD Streaming 1TV", icon: "fa fa-database", available: true },
            { text: "4K Streaming 1DVC", icon: "fa fa-clock-o", available: false },
            { text: "Installation: ₦50,000.00", icon: "fa fa-envelope", available: false }
        ]
    },
    {
        name: "SUPER",
        speed: "Up to 30 mbps",
        price: "18500",
        type: "standard",
        features: [
            { text: "4+ Connected Devices", icon: "fa fa-send", available: true },
            { text: "Unlimited Downloads", icon: "fa fa-cloud", available: true },
            { text: "HD Streaming 1TV", icon: "fa fa-database", available: true },
            { text: "4K Streaming 1DVC", icon: "fa fa-clock-o", available: false },
            { text: "Installation: ₦50,000.00", icon: "fa fa-envelope", available: false }
        ]
    },
    {
        name: "GOLD",
        speed: "Up to 60 mbps",
        price: "30000",
        type: "standard",
        features: [
            { text: "4+ Connected Devices", icon: "fa fa-send", available: true },
            { text: "Unlimited Downloads", icon: "fa fa-cloud", available: true },
            { text: "HD Streaming 1TV", icon: "fa fa-database", available: true },
            { text: "4K Streaming 1DVC", icon: "fa fa-clock-o", available: false },
            { text: "Installation: ₦50,000.00", icon: "fa fa-envelope", available: false }
        ]
    },
    {
        name: "LINKORG VIP1",
        speed: "Up to 70 mbps",
        price: "60000",
        type: "premium",
        features: [
            { text: "4+ Connected Devices", icon: "fa fa-send", available: true },
            { text: "Unlimited Downloads", icon: "fa fa-cloud", available: true },
            { text: "HD Streaming 1TV", icon: "fa fa-database", available: true },
            { text: "4K Streaming 1DVC", icon: "fa fa-clock-o", available: false },
            { text: "Installation: ₦50,000.00", icon: "fa fa-envelope", available: false }
        ]
    },
    {
        name: "LINKORG VIP2",
        speed: "Up to 100 mbps",
        price: "80000",
        type: "premium",
        features: [
            { text: "4+ Connected Devices", icon: "fa fa-send", available: true },
            { text: "Unlimited Downloads", icon: "fa fa-cloud", available: true },
            { text: "HD Streaming 1TV", icon: "fa fa-database", available: true },
            { text: "4K Streaming 1DVC", icon: "fa fa-clock-o", available: false },
            { text: "Installation: ₦50,000.00", icon: "fa fa-envelope", available: false }
        ]
    },
];
