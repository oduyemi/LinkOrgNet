import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "VPN Solutions",
  imageSrc: require("../../assets/images/services/vpn.jpg"),
  imageAlt: "Secure VPN connections.",
  description: " MPLS (Multiprotocol Label Switching) L3VPNs provide a scalable and secure way to interconnect multiple sites over a service provider's network using layer 3 routing. Each customer’s traffic is isolated within its own virtual private network, ensuring security and privacy.  MPLS L2VPNs extend layer 2 Ethernet or Frame Relay networks across a service provider’s MPLS network. This allows businesses to connect multiple locations as if they were on the same local network, maintaining layer 2 transparency. Leased lines are dedicated, point-to-point connections between two locations, offering consistent bandwidth and performance. They are not shared with other customers, providing a private and reliable connection.",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "VPN Solutions we offer",
  videoContent: "Here are three key features of VPN Solutions we offer",
  videoBenefits: [
    "MPLS L3VPN: Secure your business with scalable private network solutions.",
    "MPLS L2VPN: Connect multiple locations seamlessly and securely.",
    "Leased Line: Dedicated high-speed internet for demanding businesses.",
  ],
//   carouselItems: [
//     { imgSrc: require("../../assets/images/products/yealink0.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink-T48U.jpg"), title: "Double", location: "New Delhi", reviews: "485", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink2.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" }
// ],
  sidebarItems: [
    { name: "Voip Solutions", link: "/services/voip-services", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "Connectivity Services", link: "/services/connectivity" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    { name: "Collocation $ Datacenter Services", link: "/services/collocation-and-data-center" },
    { name: "Software Services", link: "/services/software-services" },
  ],
  // additionalImages: [
  //   { src: require("../../assets/images/products/Cisco-6841-sip.png"), alt: "Cisco 6841" },
  //   { src: require("../../assets/images/products/packages.jpg"), alt: "Packages" },
  // ],
};

const App = () => (
  <ServiceDetail {...serviceData} />
);

export default App;
