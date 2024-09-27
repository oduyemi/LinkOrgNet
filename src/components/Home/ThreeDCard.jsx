import React from "react";
import hero0 from "../../assets/images/hero0.jpg"; 
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCard() {
  return (
    <div style={{width: "50%", height: "500px"}}>

  
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ={100} className="w-full mt-4">
          <img src={hero0} alt="hero" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" />
        </CardItem>
        <div className="flex justify-between items-center mt-20"></div>
      </CardBody>
    </CardContainer>

    </div>
  );
}
