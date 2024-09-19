import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "VOIP Solutions",
  imageSrc: require("../../assets/images/callcentre.png"),
  imageAlt: "VOIP Service",
  description: "Cut down on communication costs without compromising quality. Linkorg Network’s VoIP solutions provide crystal-clear voice calls over the internet, ensuring you stay connected with clients and colleagues effortlessly",
  subtitle: "VOIP Benefits",

  carouselItems: [
    { imgSrc: require("../../assets/images/services/voip1.jpg"), title: "Cost Savings", description: "Lower communication expenses, particularly for long-distance and international calls." },
    { imgSrc: require("../../assets/images/services/voip2.jpg"), title: "Scalability", description: "Easily adjustable to add or remove lines and features without extensive infrastructure." },
    { imgSrc: require("../../assets/images/services/voip3.jpg"), title: "Flexibility and Mobility", description: "Enables communication from any location with internet access, ideal for remote work." }
],

  sidebarItems: [
    { name: "Connectivity Services", link: "/services/connectivity", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    { name: "Collocation $ Datacenter Services", link: "/services/collocation-and-data-center" },
    { name: "Software Services", link: "/services/software-services" },
  ],

};

const App = () => (
  <ServiceDetail {...serviceData} />
);

export default App;
