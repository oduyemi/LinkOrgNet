import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Satellite Solutions",
  imageSrc: require("../../assets/images/services/satellite.jpg"),
  imageAlt: "Satellite infrastructure.",
  description: `<p>Linkorg's satellite Broadband Connectivity Solution is based on the most advanced VSAT platforms available on the market today: iDirect Evolution® and Velocity® which have been the industry standard for enterprise-grade satellite connectivity for over a decade. 
                  Our solution is provided on Ku and C-band satellite beams, using Adaptive TDMA technology on both downlink and uplink directions, delivering broadband connectivity in all weather conditions using a wide selection of iDirect X series routers, delivering over 99% efficiency via Adaptive TDMA uplinks.</p>             
                  <p>We provide reliable internet communication technologies like VSAT (Very Small Aperture Terminal) to deliver seamless internet and communication services even in remote oceanic locations. This ensures reliable internet for crew welfare, operational needs, and emergency services while at sea. Broadcasting internet solutions enable the transmission of audio and video content to wide audiences.</p>`,
  subtitle: "Satellite Solutions we offer",

  carouselItems: [
    {
      imgSrc: require("../../assets/images/services/sat1.jpg"),
      title: "Terrestrial Satellite",
      description: "Stay connected in remote locations",
      link: "/services/satellite/terrestrial",
    },
    
    {
      imgSrc: require("../../assets/images/services/sat3.jpg"),
      title: "Cellular Backhauling",
      description: "Expand mobile coverage to remote areas with satellite.",
      link: "/services/satellite/backhauling",
    },
  ],

  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Internet Solutions", link: "/services/internet" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    {
      name: "Collocation & Datacenter Services",
      link: "/services/collocation-and-data-center",
    },
    { name: "Software Services", link: "/services/software-services" },
  ],
};

const App = () => <ServiceDetail {...serviceData} isVoipPage={true} />;

export default App;
