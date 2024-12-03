import React from "react";
import ServiceDetail from ".";

const serviceData = {
  title: "Internet Solutions",
  imageSrc: require("../../assets/images/services/internet.jpg"),
  imageAlt: "Internet Solutions",
  description: `<p>At LinkOrg Networks, we offer advanced Internet solutions to enhance your digital experience. Our high-speed wireless internet delivers exceptional speed and reliability, eliminating slow connections. For even faster performance, our fiber-optic speeds provide ultra-fast data transmission suitable for both residential and business use.</p>
  <p>Additionally, our community Internet solutions improve network access across residential estates, ensuring every household benefits from a strong, high-speed connection. Our services are designed to support seamless streaming, efficient work, and robust community Internet.</p>`,

  subtitle: "Internet Solutions we Offer",

  carouselItems: [
    {
      imgSrc: require("../../assets/images/services/connect1.jpg"),
      title: "High-Speed Wireless",
      description: "Stay connected with fast, reliable wireless internet.",
      link: "/services/internet/highspeed",
    },
    {
      imgSrc: require("../../assets/images/services/connect2.jpg"),
      title: "Fiber to Home",
      description:
        "Ultra-fast fiber-optic speeds for seamless online activities.",
      link: "/services/internet/fiber",
    },
    {
      imgSrc: require("../../assets/images/services/connect3.png"),
      title: "Estate Connect",
      description:
        "Connect entire residential communities with high-speed internet access.",
      link: "/services/internet/estate_connect",
    },
  ],

  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
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
