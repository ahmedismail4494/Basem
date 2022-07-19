import React from 'react';
import Link from "next/link";
import Nstyles from "./../styles/Navigation.module.scss";
import Image from 'next/image';
import logoImage from "./../public/favicon.ico";





const Navigation = () => {
  return (
    <div className={Nstyles.Navbar}>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <a className="navbar-brand" as={Link} href="#"> 
            <Image  src={logoImage}  alt="Picture of the author" width={40} height={40} /> 
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-end ">
              <li className="nav-item ">
                <span className="nav-link" ><Link href="/"  crossorigin="anonymous" >  الرئيسيه  </Link></span>
              </li>
              <li className="nav-item">
                <span className="nav-link" > <Link href="/projects" crossorigin="anonymous" >  مشاريعنا </Link></span>
              </li>
              <li className="nav-item">
                <span className="nav-link" > <Link href="/services" crossorigin="anonymous" >  خدماتنا </Link> </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" > <Link href="/contact" crossorigin="anonymous" >   اتصل بن  </Link>  </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>


    </div>
  )
}

export default Navigation
