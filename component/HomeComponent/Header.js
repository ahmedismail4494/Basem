import React from 'react';
import Hstyle from './../../styles/Header.module.scss';


const Header = () => {
  return (
    <div className={Hstyle.Header}>
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
  )
}

export default Header
