import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Storage Solutions",
  imageSrc: require("../../assets/images/services/storage.jpg"),
  imageAlt: "Data storage or cloud infrastructure.",
  description: `<p>SAN (Storage Area Network), NAS (Network Attached Storage), and cloud storage are three key solutions for modern data management. SAN offers high-speed, block-level storage ideal for businesses with large-scale data transfer and performance demands, such as databases and virtualization. NAS provides file-based storage that's easy to access and share over a network, making it suitable for file sharing and backups in both home and business environments. </p> 
                <p>Cloud storage delivers scalable, remote storage options, allowing businesses to pay for what they use while benefiting from easy access and disaster recovery capabilities. Together, these solutions cater to diverse storage needs, from high-performance to cost-effective scalability.</p>`,
  subtitle: "Storage Solutions we offer",

  carouselItems: [
    {
      imgSrc: require("../../assets/images/services/store1.jpg"),
      title: "SAN",
      description: "High-performance on-premises storage.",
      link: "/services/storage-solutions/san",
    },
    {
      imgSrc: require("../../assets/images/services/store2.jpg"),
      title: "NAS",
      description: "Scalable, easy-to-use networked storage.",
      link: "/services/storage-solutions/nas",
    },
    {
      imgSrc: require("../../assets/images/services/store3.png"),
      title: "Cloud Storage",
      description: "Secure, flexible access to data anytime, anywhere.",
      link: "/services/storage-solutions/cloud_storage",
    },
  ],

  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Internet Solutions", link: "/services/internet" },
    {
      name: "Collocation & Datacenter Services",
      link: "/services/collocation-and-data-center",
    },
    { name: "Software Services", link: "/services/software-services" },
  ],
};

const App = () => <ServiceDetail {...serviceData} isVoipPage={true} />;

export default App;
