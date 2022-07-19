import React from 'react';
import Mstyle from "./../../styles/Projects.module.scss";

import Image from 'next/image';
import basemImage from "./../../images/BasemElawa-1.jpg";

import basem_l_4Image from "./../../images/Basem_L_4.jpg";

import basemImage2 from "./../../images/img_2.jpg";
import basemImage4 from "./../../images/img_4.jpg";
import basemImage5 from "./../../images/img_5.jpg";
import basemImage6 from "./../../images/img_6.jpg";
import basemImage8 from "./../../images/img_8.jpg";
import basemImage9 from "./../../images/img_9.jpg";
import basemImage10 from "./../../images/img_10.jpg";
import basemImage11 from "./../../images/img_11.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faLocationDot,
  faBriefcase,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  return (
    <div className={Mstyle.mainPage}>
      
      {/*  Heder  Section  */}
      <div className={Mstyle.Header}>
        <div className="container" >
          <div className='row '>
            <div className='col-lg-6 col-md-6 col-sm-12 '>
              <h2> مجموعه باسم جروب  </h2>
              <p> 
              مجموعه باسم جروب هى شركة مساهمه مصريه للأنشاءو بناء و الاستثمار فى الوحدات العقاريه
              </p>
              <button> <a href='https://www.facebook.com/basemeliwa.bg'> Visit FaceBook </a> </button>
            </div>
            <div className='col-lg-6 col-md-6'>
              
            </div>
          </div>
        </div>
      </div>


      {/*  Founder  Section  */}
      <div className={Mstyle.Founder}>
        <div className="container" >

          <div className={Mstyle.titleParent + ' row'}>
            <h2 className='title'> الرئيسى التنفيذى </h2>
          </div>

          <div className='row '>
            <div className={Mstyle.ImageHolder + ' col-lg-6 col-md-6 col-sm-12'}>
              <Image  src={basemImage} className={Mstyle.Image + " Image"}  alt="Picture of the author"  />
            </div>
            
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
              <div  className={Mstyle.info}>
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

        </div>
      </div>


      {/*  Company  Section  */}
      <div className={Mstyle.Company}>
        <div className="container" >

          <div className={Mstyle.titleParent + ' row'}>
            <h2 className='title'> Basem Group </h2>
          </div>
          
          <div className='row '>

            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
              <div  className={Mstyle.info}> 
                <ul>
                  <li> <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 40 }} /> <p> تم تأسيس الشركه سنة 2014  شركة مساهمه مصريه </p> </li>
                  <li> <FontAwesomeIcon icon={faLocationDot}  style={{ fontSize: 40 }} /> <p> المركز الرئيسى للشركه  فى محافظة كفر الشيخ </p> </li>
                  <li> <FontAwesomeIcon icon={faBriefcase}  style={{ fontSize: 40 }} /> <p> النشاط الاساسى للشركه هو انشاء و تطوير العقارات و الاستثمار و بيع وشراء الوحدات العقاريه </p> </li>
                  <li> <FontAwesomeIcon icon={faBuilding}  style={{ fontSize: 40 }} /> <p>  تضم الشركة مجموعه من الشركات تحت رايتها و منها (المدائن - شمندر) </p> </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
              <Image  src={basem_l_4Image} className={Mstyle.Image}  alt="Picture of the author" width={500} height={500} />
            </div>
          </div>

        </div>
      </div>


        {/*  Advertisement  Section  */}
      <div className={Mstyle.Advertisement}>
        <div className={Mstyle.imageHolder}>
            <Image  src={basemImage2} className={Mstyle.Image}  alt="Picture of the author"   />

            <Image  src={basemImage8} className={Mstyle.Image}  alt="Picture of the author"   />

            <Image  src={basemImage4} className={Mstyle.Image}  alt="Picture of the author"   />

            <Image  src={basemImage5} className={Mstyle.Image}  alt="Picture of the author"   />

            <Image  src={basemImage6} className={Mstyle.Image}  alt="Picture of the author"   />

            <Image  src={basemImage9} className={Mstyle.Image}  alt="Picture of the author"   />

            <Image  src={basemImage10} className={Mstyle.Image}  alt="Picture of the author"  />

            <Image  src={basemImage11} className={Mstyle.Image}  alt="Picture of the author"  />
        </div> 
      </div>

    </div>
  )
}

export default MainPage
