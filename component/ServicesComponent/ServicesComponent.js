import React from 'react';
import Sstyle from "./../../styles/ServicesComponent.module.scss";

import Image from "next/image";
import Khadamat2 from "./../../images/khadamat_2.jpg";
import Khadamat3 from "./../../images/khadamat_3.jpg";
import Khadamat4 from "./../../images/khadamat_4.jpg";
import Khadamat5 from "./../../images/khadamat_5.jpg";

const Services = () => {
  return (
    <div className={Sstyle.ServicePage}>

        {/*   header section   */}
      <div className={Sstyle.header}>
        
      </div>


          {/*   header section   */}
      <div className={Sstyle.ttttt}>
        <Image  src={Khadamat2}  />
        <Image  src={Khadamat3}  />
        <Image  src={Khadamat4}  />
        <Image  src={Khadamat5}  />
      </div>
      
    </div>
  )
}

export default Services
