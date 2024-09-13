import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "VOIP",
  imageSrc: require("../../assets/images/callcentre.png"),
  imageAlt: "VOIP Service",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "VOIP Benefits",
  videoContent: "Lorem ipsum dolor sit amet, consectetur adipisici...",
  videoBenefits: [
    "Research beyond the business plan",
    "Marketing options and rates",
    "The ability to turnaround consulting",
  ],
  carouselItems: [
    { imgSrc: require("../../assets/images/products/yealink0.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" },
    { imgSrc: require("../../assets/images/products/yealink-T48U.jpg"), title: "Double", location: "New Delhi", reviews: "485", description: "For what reason would it be advisable for me to think about business content?" },
    { imgSrc: require("../../assets/images/products/yealink2.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" }
],
  sidebarItems: [
    { name: "Cloud Service", link: "#", active: true },
    { name: "Web Development", link: "#" },
    { name: "Ui/Ux Designing", link: "#" },
    { name: "IT Management", link: "#" },
    { name: "Data Visualization", link: "#" },
    { name: "Security System", link: "#" },
  ],
  additionalImages: [
    { src: require("../../assets/images/products/Cisco-6841-sip.png"), alt: "Cisco 6841" },
    { src: require("../../assets/images/products/packages.jpg"), alt: "Packages" },
  ],
};

const App = () => (
  <ServiceDetail {...serviceData} />
);

export default App;
