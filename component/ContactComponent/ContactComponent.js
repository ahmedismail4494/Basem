import React from 'react';
import Cstyle from './../../styles/ContactComponent.module.scss';

import 'font-awesome/css/font-awesome.min.css'; 



const ContactComponent = () => {
  return (
    <div className={Cstyle.ContactPage}>
      <div className='container'>
        <div className='row'>

          <div className={Cstyle.info1 + " col-md-6"}>
            <ul>
              <li>
                <span> <i className="fa-solid fa-location-dot" style={{ fontSize: 40, color: "#b19d6b" }}  ></i>  </span> 
                كفر الشيخ - الطريق الدولي - مدخل ميدان ال47 - أمام سيراميك رويال - برج 35 - الدور الثالث <br /> كفر الشيخ ، محافظة كفر الشيخ مصر 00122
              </li>
              <li>
                <span > <i className="fa-brands fa-facebook-f" style={{ fontSize: 40, color: "#b19d6b" }}  ></i>   </span>
                  <a href='https://www.facebook.com/Basem.Elewa.Group' > www.facebook.com/Basem.Elewa.Group </a> 
              </li>
              <li>
                <span> <i className="fa-solid fa-phone" style={{ fontSize: 40, color: "#b19d6b" }} ></i> </span> 
                +20 1021591316
              </li>
            </ul>
          </div>

          

          <div className={Cstyle.info2 + " col-md-6"}>
            {/* Form Section */}
            <form >
              <div className="form-row m-auto">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default ContactComponent
