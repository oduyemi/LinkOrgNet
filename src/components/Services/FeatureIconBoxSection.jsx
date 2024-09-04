import React from 'react';
import { Box, Typography } from "@mui/material";
import BackupIcon from '@mui/icons-material/Backup';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const FeatureIconBox = ({ IconComponent, title, description, delay }) => (
    <Box className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={delay}>
        <Box className="icon-box-items">
            <Box className="icon">
                <IconComponent style={{ fontSize: '48px', color: '#E65D0F' }} />
            </Box>
            <Box className="content">
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
        </Box>
    </Box>
);

const FeatureIconBoxSection = () => {
    return (
        <Box className="feature-icon-box-area-2">
            <Box className="container">
                <Box className="feature-icon-box-wrapper">
                    <Box className="row g-4">
                        <FeatureIconBox
                            IconComponent={PhoneInTalkIcon}
                            title="Voice Over Protocol"
                            description="Providing seamless and reliable voice communication solutions tailored to your business needs."
                            delay=".3s"
                        />
                        <FeatureIconBox
                            IconComponent={BackupIcon}
                            title="Data Backup"
                            description="Secure and efficient data backup solutions ensuring the safety of your critical information."
                            delay=".5s"
                        />
                        <FeatureIconBox
                            IconComponent={ConnectWithoutContactIcon}
                            title="Fast Connected"
                            description="Experience high-speed, uninterrupted connectivity across all your operations."
                            delay=".7s"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FeatureIconBoxSection;
