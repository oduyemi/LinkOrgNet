import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Collocation & Datacenter Services",
  imageSrc: require("../../assets/images/services/datacenter.jpg"),
  imageAlt: " Datacenter or server racks",
  description: `<p> Virtual hosting, collocation, and backup services are essential for businesses seeking secure and scalable infrastructure. Virtual hosting allows companies to host their websites and applications on shared servers, reducing costs while maintaining performance and flexibility. Collocation offers businesses the ability to house their servers in a secure data center, ensuring high availability, better cooling, and physical security without the need for in-house infrastructure.</p> 
                <p>Backup services provide critical data protection, offering regular, automated backups that safeguard against data loss, ensuring business continuity in the event of system failures or cyber threats. These solutions work together to provide reliability, security, and scalability for businesses of all sizes.</p>`,
  subtitle: "Collocation & Datacenter Services we offer",

  carouselItems: [
    { imgSrc: require("../../assets/images/services/data1.jpeg"), title: "Virtual Servers", description: "Scale your business with virtual hosting." },
    { imgSrc: require("../../assets/images/services/data2.jpg"), title: "Collocation", description: "Secure IT infrastructure in a state-of-the-art datacenter." },
    { imgSrc: require("../../assets/images/services/data3.jpg"), title: "Data Backup", description: "Comprehensive solutions for data protection and recovery." }
],
  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    { name: "Connectivity Services", link: "/services/connectivity" },
    { name: "Software Services", link: "/services/software-services" },
  ],

};

const App = () => (
  <ServiceDetail {...serviceData} />
);

export default App;
