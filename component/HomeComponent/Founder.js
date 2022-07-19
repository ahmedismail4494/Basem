import React from 'react';
import Fstyle from "./../../styles/Founder.module.scss";
import {Container} from "react-bootstrap";

import Image from 'next/image';
import basemImage from "./../../images/BasemElawa-1.jpg";


const Founder = () => {
  return (
    <div className={Fstyle.Founder}>
      <Container>
        <div className={Fstyle.titleParent + ' row'}>
          <h2 className='title'> الرئيسى التنفيذى </h2>
        </div>

        <div className='row '>
          <div className={Fstyle.ImageHolder + ' col-lg-6 col-md-6 col-sm-12'}>
            <Image  src={basemImage} className={Fstyle.Image + " Image"}  alt="Picture of the author"  />
          </div>
          
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <div  className={Fstyle.info}>
              <h3> الدكتور باسم عليوه  </h3> 
              <ul>
                <li> مواليد محافظة كفرالشيخ </li>
                <li> مالك و مؤسس شركة Basem Group العقاريه </li>
                <li> باحث دكتوراة لدى كلية التجارة - جامعة الأزهر</li>
                <li> مساعد لدى الجامعة الإسلامية بمنيسوتا - المركز الرئيسي </li>
                <li> Owner and CEO لدى شمندر - Shamander </li>
                <li> Vice- Chairman لدى المدائن جروب للتنمية والاستثمار الزراعي </li>
              </ul>
            </div>
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Founder
