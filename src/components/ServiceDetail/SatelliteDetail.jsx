import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Satellite Solutions",
  imageSrc: require("../../assets/images/services/satellite.jpg"),
  imageAlt: "Maritime or satellite infrastructure.",
  description: `<p>Terrestrial connectivity solutions provide robust, high-speed internet and communication services via ground-based infrastructure like fiber optics, wireless networks, and microwave links. These solutions are ideal for urban and rural areas, ensuring reliable connections for businesses, homes, and large communities.</p> 
               <p>Maritime connectivity caters specifically to ships, offshore platforms, and vessels, using satellite communication technologies like VSAT (Very Small Aperture Terminal) to deliver seamless internet and communication services even in remote oceanic locations. This ensures reliable connectivity for crew welfare, operational needs, and emergency services while at sea. Broadcasting connectivity solutions enable the transmission of audio and video content to wide audiences.</p>
               <p> Leveraging satellite, terrestrial, and IP-based technologies, these solutions support television, radio, and live streaming services, ensuring clear, real-time broadcasting with minimal latency across vast geographic regions. Together, these connectivity solutions cater to the unique needs of various industries, ensuring continuous, high-quality communication regardless of location.</p>`,
  subtitle: "Satellite Solutions we offer",

  carouselItems: [
    { imgSrc: require("../../assets/images/services/sat1.jpg"), title: "Terrestrial Satellite", description: "Stay connected in remote locations" },
    { imgSrc: require("../../assets/images/services/sat2.jpg"), title: "Maritime Internet", description: "Reliable connection for offshore platforms and ships." },
    { imgSrc: require("../../assets/images/services/sat3.jpg"), title: "Cellular Backhauling", description: "Expand mobile coverage to remote areas with satellite." }
],

  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Internet Services", link: "/services/internet_services" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    { name: "Collocation & Datacenter Services", link: "/services/collocation-and-data-center" },
    { name: "Software Services", link: "/services/software-services" },
  ],

};

const App = () => (
  <ServiceDetail {...serviceData} />
);

export default App;
