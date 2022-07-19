import React from "react";
import Pstyle from "./../../styles/ProjectsComponent.module.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSackDollar,
  faCoins,
  faHandHoldingDollar, } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import SliderImage1 from "./../../images/shif_4.jpg";
import SliderImage2 from "./../../images/g_1.jpg";
import SliderImage3 from "./../../images/g_2.jpg";

import TalaImage1 from "./../../images/tala_1.jpg";
import TalaImage2 from "./../../images/tala_2.jpg";
import TalaImage3 from "./../../images/tala_3.jpg";

import taqset1 from "./../../images/t_1.jpg";
import taqset2 from "./../../images/t_2.jpg";
import taqset3 from "./../../images/t_3.jpg";

import NakhilImage2 from "./../../images/nakhil_2.jpg";
import NakhilImage4 from "./../../images/nakhil_4.jpg";
import NakhilImage5 from "./../../images/nakhil_5.jpg";

import shif1 from "./../../images/shif_3.jpg";
import shif2 from "./../../images/shif_5.jpg";
import shif3 from "./../../images/shif_8.jpg";




const Slider = () => {
  return (
    <div className={Pstyle.projects}>


       {/* Header section   */}
      <div className={Pstyle.header}>
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
          </ul>

          <div className="carousel-inner">
            <div className="carousel-item  active">
              <Image  src={SliderImage2}  />
            </div>
            <div className="carousel-item">
              <Image  src={SliderImage1}  />
            </div>
            <div className="carousel-item">
              <Image  src={SliderImage3}  />
            </div>
          </div>

          <a className="carousel-control-prev" href="#carousel" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#carousel" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      


       {/* tala section   */}
      <div className={Pstyle.tala }>
        <div className="container">     

          <div className={Pstyle.titleParent + ' row'}>
            <h2 className='title'>  برج طله  </h2>
          </div>

          <div className={Pstyle.discription + ' row'}>
            <div className='col-lg-6 col-md-6 col-sm-12 h5'>
              <ul>
                <li> إمتلك وحدتك فى برج طله وإستلم فورى </li>
                <li> حيث الرقى والموقع المتميز و الأسعار المناسبة </li>
                <li> الإستغلال الصح لمساحة الشقة هو من أهم مميزات برج طلة </li>
                <li> الصور من التصميم الداخلي لشقق برج طلة </li>
                <li> لتفاصيل ومعلومات أكتر تواصل معنا على: 01020555581 </li>
              </ul>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12  h5'>
              <ul>
                <li> وحدات البرج تتميز ب :</li>
                <li>* إطلالة بحري شرقي/ بحري غربى </li>
                <li>* مساحة الشقق 128 م. </li>
                <li>* مساحة الشقق 138 م. </li>
                <li>* الإستلام فورى و إمكانية التقسيط على سنة </li>
              </ul>
            </div>
          </div>

          <div className={Pstyle.talaImages}>
            <Image className={Pstyle.image} src={TalaImage1}  />
            <Image className={Pstyle.image} src={TalaImage2}  />
            <Image className={Pstyle.image} src={TalaImage3}  />
          </div>

        </div>
      </div>



        {/* taqset section   */}
      <div className={Pstyle.taqset}>
        <div className="container">

          <div className={Pstyle.titleParent + ' row'}>
            <h2 className='title'> نظام الدفع </h2>
          </div>

          <div className={Pstyle.taqsetIcons}> 
            <div >
              <div className={Pstyle.taqsetIcon}>
                <span> <FontAwesomeIcon icon={faSackDollar}  style={{ fontSize: 40 }} /> </span> 
                <h4 className="py-2"> كاش </h4>
                <p>  الاستلام الفورى مع امكانية التصميم الداخلى و التشطيب للوحده السكانيه بناء على راغبة العميل</p>
              </div>
              <Image className={Pstyle.image} src={taqset1}  />
            </div>
            
            <div >
              <Image className={Pstyle.image} src={taqset2}  />
              <div className={Pstyle.taqsetIcon}>
                <span> <FontAwesomeIcon icon={faCoins}  style={{ fontSize: 40 }} /> </span> 
                <h4 className="py-2"> نصف تقسيط  </h4>
                <p> الاستلام الفورى للوحده السكنيه او التعاقد على وحده تحت الانشاء و دفع نصف المبلغ كاش و النصف الاخر نقسيط على سن   </p>
              </div>
            </div>

            <div >
              <div className={Pstyle.taqsetIcon}>
                <span> <FontAwesomeIcon icon={faHandHoldingDollar}  style={{ fontSize: 40 }} /> </span>
                <h4 className="py-2"> تقسيط </h4>
                <p> التعاقد على وحده تحت الانشاء و قسط بالنظام المناسب لك و لظروفك اختار قيمة المقدم و مدة التقسيط شرط ان لا تزيد المده عن 3 سنوات </p>
              </div>
              <Image className={Pstyle.image} src={taqset3}  />
            </div>
          </div>

        </div>
      </div>



        {/* nakhil  section */}
      <div className={Pstyle.nakhil}>
        <div className="container">

          <div className={Pstyle.titleParent + ' row'}>
            <h2 className='title'>  برج النخيل  </h2>
          </div>

          <div className={Pstyle.discription + ' row'}>
            <div className='col-lg-6 col-md-6 col-sm-12 h5'>
              <ul>
                <li> إمتلك وحدتك فى برج النخيل وإستلم فورى </li>
                <li> حيث الرقى والموقع المتميز و الأسعار المناسبة </li>
                <li> الإستغلال الصح لمساحة الشقة هو من أهم مميزات برج النخيل </li>
                <li> لتفاصيل ومعلومات أكتر تواصل معنا على: 01020555581 </li>
              </ul>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12  h5'>
              <ul>
                <li> وحدات البرج تتميز ب :</li>
                <li>* إطلالة بحري شرقي </li>
                <li>* مساحة الشقق 105 م. </li>
                <li>* الإستلام فورى و إمكانية التقسيط على سنة </li>
              </ul>
            </div>
          </div>

          <div className={Pstyle.talaImages}>
            <Image className={Pstyle.image} src={NakhilImage4}  />
            <Image className={Pstyle.image} src={NakhilImage2}  />
            <Image className={Pstyle.image} src={NakhilImage5}  />
          </div>

        </div>
      </div>


      
        {/* join  section */}
      <div className={Pstyle.join}>
        <div className="container">

        </div>
      </div>

      
        {/* shifshawen  section */}
        <div className={Pstyle.nakhil}>
        <div className="container">

          <div className={Pstyle.titleParent + ' row'}>
            <h2 className='title'>  برج شفشاون  </h2>
          </div>

          <div className={Pstyle.discription + ' row'}>
            <div className='col-lg-6 col-md-6 col-sm-12 h5'>
              <ul>
                <li> إمتلك وحدتك فى برج شفشاون وإستلم فورى </li>
                <li> حيث الرقى والموقع المتميز و الأسعار المناسبة </li>
                <li> الإستغلال الصح لمساحة الشقة هو من أهم مميزات برج شفشاون </li>
                <li> لتفاصيل ومعلومات أكتر تواصل معنا على: 01020555581 </li>
              </ul>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12  h5'>
              <ul>
                <li> وحدات البرج تتميز ب :</li>
                <li>*  إطلالة بحري شرقي / بحرى غربى </li>
                <li>* مساحة الشقق 120 م. / 150 / 165 </li>
                <li>* الإستلام فورى و إمكانية التقسيط على سنة </li>
              </ul>
            </div>
          </div>

          <div className={Pstyle.talaImages}>
            <Image className={Pstyle.image} src={shif2}  />
            <Image className={Pstyle.image} src={shif1}  />
            <Image className={Pstyle.image} src={shif3}  />
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Slider;

