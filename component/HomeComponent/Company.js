import React from "react";
import Cstyle from "./../../styles/Company.module.scss";
import {Container} from "react-bootstrap";

import Image from 'next/image';
import basem_l_4Image from "./../../images/Basem_L_4.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faLocationDot,
  faBriefcase,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const Company = () => {
  return(
    <div className={Cstyle.Company}>
      <Container>
        <div className={Cstyle.titleParent + ' row'}>
          <h2 className='title'> Basem Group </h2>
        </div>
        
        

        <div className='row '>

          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <div  className={Cstyle.info}> 
              <ul>
                <li> <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 40 }} /> <p> تم تأسيس الشركه سنة 2014  شركة مساهمه مصريه </p> </li>
                <li> <FontAwesomeIcon icon={faLocationDot}  style={{ fontSize: 40 }} /> <p> المركز الرئيسى للشركه  فى محافظة كفر الشيخ </p> </li>
                <li> <FontAwesomeIcon icon={faBriefcase}  style={{ fontSize: 40 }} /> <p> النشاط الاساسى للشركه هو انشاء و تطوير العقارات و الاستثمار و بيع وشراء الوحدات العقاريه </p> </li>
                <li> <FontAwesomeIcon icon={faBuilding}  style={{ fontSize: 40 }} /> <p>  تضم الشركة مجموعه من الشركات تحت رايتها و منها (المدائن - شمندر) </p> </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <Image  src={basem_l_4Image} className={Cstyle.Image}  alt="Picture of the author" width={500} height={500} />
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Company;