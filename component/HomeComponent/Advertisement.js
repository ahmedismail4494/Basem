import React from 'react';
import Astyles from './../../styles/advertisement.module.scss';
import Image from 'next/image';

import basemImage2 from "./../../images/img_2.jpg";
import basemImage4 from "./../../images/img_4.jpg";
import basemImage5 from "./../../images/img_5.jpg";
import basemImage6 from "./../../images/img_6.jpg";
import basemImage8 from "./../../images/img_8.jpg";
import basemImage9 from "./../../images/img_9.jpg";
import basemImage10 from "./../../images/img_10.jpg";
import basemImage11 from "./../../images/img_11.jpg";

const Advertisement = () => {
  return (
    <div className={Astyles.Advertisement}>
      
        <div className={Astyles.imageHolder}>
            <Image  src={basemImage2} className={Astyles.Image}  alt="Picture of the author"   />

            <Image  src={basemImage8} className={Astyles.Image}  alt="Picture of the author"   />

            <Image  src={basemImage4} className={Astyles.Image}  alt="Picture of the author"   />

            <Image  src={basemImage5} className={Astyles.Image}  alt="Picture of the author"   />

            <Image  src={basemImage6} className={Astyles.Image}  alt="Picture of the author"   />

            <Image  src={basemImage9} className={Astyles.Image}  alt="Picture of the author"   />

            <Image  src={basemImage10} className={Astyles.Image}  alt="Picture of the author"  />

            <Image  src={basemImage11} className={Astyles.Image}  alt="Picture of the author"  />
        </div> 
      
    </div>
  )
}

export default Advertisement
