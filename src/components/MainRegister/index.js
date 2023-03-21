import React from "react";
import './main-register.css'
import { Link } from "react-router-dom";


const MainRegister = () =>{
    return(
        <main>
            <div className='sign-up-image'>
                <h1>Image</h1>
                <p>A Rivi by ResMed partnership with <strong>DrLullaby</strong></p> 
            </div>
            <div className='sign-up-page'>
        
        
            <form>
                <h4>RiVi by ResMed X DrLullaby</h4>
                <h1>Sign up</h1>
                <p>For assistance text/call 844-4SLEEP or email support</p>
                <div className='form-inputs'>
                    <label>First name <span>*</span></label><br />
                    <input type="text" name="firstname" className='input-details'/><br /><br />

                    <label>Username <span>*</span></label><br />
                    <input type="text" name="username" className='input-details'/><br /><br />

                    <label>Email <span>*</span></label><br />
                    <input type="email" name="email" className='input-details'/><br /><br />

                    <label>Re-enter your email <span>*</span></label><br />
                    <input type="email" name="reemail" className='input-details'/><br /><br />

                    <label>Password <span>*</span></label><br />
                    <input type="password" name="password" className='input-details'/><br /><br />

                    <label>Re-enter your password <span>*</span></label><br />
                    <input type="password" name="repassword" className='input-details'/><br /><br />

                    <label>Enter your promo code, if any </label><br />
                    <input type="text" name="promo-code" className='input-details'/><br /><br />

                </div>
            
            <div className='terms'>
                <label>By clicking these boxes, you are electronically signing to the following terms:</label><br /><br />
                <div className='check-input'>
                    <input type="checkbox" id="financial" name="vehicle"  />
                    <label for="vehicle1">Financial: Payment Policies and Credit Card Authorization </label><br />

                </div>
                <div className='check-input'>
                    <input type="checkbox" id="telehealth" name="telehealth" />
                    <label for="vehicle2">Telehealth: Informed consent and HIPAA Authorization</label><br />
                    
                </div>
                <div className='check-input'>
                    <input type="checkbox" id="webapp" name="vehicle3" value="Boat"/>
                    <label for="vehicle3">Webapp: Terms & conditions and Privacy policy</label><br />
                </div>
      

            </div>
            

            <button className='btn'>Get started</button>

            
            </form>
        <p className='already'>Already have an account?<Link to="/login">Log in</Link> </p>
            </div>
        </main>
    )
}

export default MainRegister