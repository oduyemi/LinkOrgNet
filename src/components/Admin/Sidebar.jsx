import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import { Person2 } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import TuneIcon from '@mui/icons-material/Tune';


export const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Toggle button for small screens */}
            <button className="btn orange h-40" onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sideicon-full-height" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Offcanvas (sidebar) for small screens */}
            <Offcanvas show={show} onHide={handleClose} className="">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center mt-3 cursor-pointer">
                            <HomeIcon
                                sx={{
                                    fontSize: 60,
                                    color: "#100156"
                                }}
                            />&emsp;
                            <Link to="/admin" className="text-dark text-decoration-none fw-semibold hover-text-danger">Home</Link>
                        </li>
                        <li className="d-flex align-items-center mt-3 cursor-pointer">
                            <EmailIcon
                                sx={{
                                    fontSize: 50,
                                    color: "#100156",
                                    marginLeft: "5px"                  
                                }}
                            />&emsp;
                            <Link to="/admin/contacts" className="text-dark text-decoration-none fw-semibold hover-text-danger">Contact List</Link>
                        </li>
                        <li className="d-flex align-items-center mt-3 pl-1 cursor-pointer">
                            <Person2
                                sx={{
                                    fontSize: 60,
                                    color: "#100156"
                                }}
                            />&emsp;
                            <Link to="/admin/profile" className="text-dark text-decoration-none fw-semibold hover-text-danger">Profile</Link>
                        </li>
                        <li className="d-flex align-items-center text-light mt-3 cursor-pointer">
                            <SendIcon
                                sx={{
                                    fontSize: 50,
                                    color: "#100156",
                                    marginLeft: "6px"                               
                                 }}
                            />&emsp;
                            <Link to="/admin/send-email" className="text-dark text-decoration-none fw-semibold hover-text-danger">Send Email</Link>
                        </li>
                        <li className="d-flex align-items-center mt-3 cursor-pointer">
                            <TuneIcon
                                sx={{
                                    fontSize: 60,
                                    color: "#100156",
                                    // marginLeft: "6px"                               
                                 }}
                            />
                            <Link to="/admin/update-password" className="text-dark text-decoration-none fw-semibold hover-text-danger">Change Password</Link>
                        </li>
                        <li>
                            <Link to="/logout">
                                <button className="btn btn-primary mt-3">Logout</button>
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>

            {/* Sidebar for larger screens */}
            <div className="d-none d-md-flex flex-column w-25 sidebar-full-height blu">
                <div className="mx-auto py-3">
                    <ul className="list-unstyled text-light">
                        <li className="d-flex align-items-center mt-3 cursor-pointer">
                            <HomeIcon
                                sx={{
                                    fontSize: 40
                                }}
                            />&emsp;
                            <Link to="/admin" className="text-light text-decoration-none fw-semibold hover-text-danger">Home</Link>
                        </li>
                        <li className="d-flex align-items-center mt-3 cursor-pointer">
                            <EmailIcon
                                sx={{
                                    fontSize: 50,
                                    color: "#fff"
                                }}
                            /> &emsp;
                            <Link to="/admin/contacts" className="text-light text-decoration-none fw-semibold hover-text-danger">Contact List</Link>
                        </li>
                        <li className="d-flex align-items-center mt-3 cursor-pointer">
                            <Person2
                                sx={{
                                    fontSize: 65,
                                    color: "#fff",
                                     marginLeft: "-7px"                  
 
                                }} 
                            />&emsp;
                            <Link to="/admin/profile" className="text-light text-decoration-none fw-semibold hover-text-danger">Profile</Link>
                        </li>
                        <li className="d-flex align-items-center mt-3 cursor-pointer">
                            <SendIcon
                                sx={{
                                    fontSize: 50,
                                    color: "#fff"
                                }}
                            />&emsp;
                            <Link to="/admin/send-email" className="text-light text-decoration-none fw-semibold hover-text-danger">Send Email</Link>
                        </li>
                        <li className="d-flex align-items-center mt-3 cursor-pointer">
                        <TuneIcon
                                sx={{
                                    fontSize: 60,
                                    color: "#fff"
                                }}
                            />
                            <Link to="/update-password" className="text-light text-decoration-none fw-semibold hover-text-danger">Change Password</Link>
                        </li>
                        <li>
                            <Link to="/logout">
                                <button className="btn btn-lg btn-primary mt-3">Logout</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
