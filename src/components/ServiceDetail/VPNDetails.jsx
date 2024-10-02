import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "VPN Solutions",
  imageSrc: require("../../assets/images/services/vpn.jpg"),
  imageAlt: "Secure VPN connections.",
  description: ` <p>MPLS (Multiprotocol Label Switching) L3VPNs provide a scalable and secure way to interconnect multiple sites over a service provider's network using layer 3 routing. Each customer’s traffic is isolated within its own virtual private network, ensuring security and privacy.  MPLS L2VPNs extend layer 2 Ethernet or Frame Relay networks across a service provider’s MPLS network. </p>  
                 <p> This allows businesses to connect multiple locations as if they were on the same local network, maintaining layer 2 transparency. Leased lines are dedicated, point-to-point connections between two locations, offering consistent bandwidth and performance. They are not shared with other customers, providing a private and reliable connection.</p>`,
  subtitle: "VPN Solutions we offer",

  carouselItems: [
    { imgSrc: require("../../assets/images/services/vpn1.png"), title: "MPLS L3VPN", description: "Secure your business with scalable private network solutions.", link: "/services/vpn-solutions/mpls3" },
    { imgSrc: require("../../assets/images/services/vpn2.png"), title: "MPLS L2VPN", description: "Connect multiple locations seamlessly and securely.",  link: "/services/vpn-solutions/mpls2" },
    { imgSrc: require("../../assets/images/services/vpn3.png"), title: "Leased Line", description: " Dedicated high-speed internet for demanding businesses.",  link: "/services/vpn-solutions/leased" }
],

  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "Internet Solutions", link: "/services/internet" },
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
