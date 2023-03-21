import React from "react";
import './footer.css'


const Footer = () =>{
    return(
        <footer>
            <div className='about-text'>
                <p>This platform is a Rivi by ResMed partnership with DrLullaby.</p><br />
                <p>DrLullaby offers telehealth diagnosis and treatment in states where we have a licensed provider. DrLullaby’s digital health component (i.e., webapp only/self-service) does not include
                diagnosis or treatment. In states where we do not yet have a licensed psychologist, there is no diagnosis or treatment offering.</p><br />
                <p>Please also note that even if you are working with one of our licensed psychologists, in a state where we offer treatment, we always recommend talking to your doctor as there are
                many times when medical and mental health symptoms fall outside the scope of what our services cover.</p>
                
            </div>
            <div className='footnotes'>
                <div className='rivi'>
                    <h1>RiVi</h1>
                    <p><i>by <strong>ResMed</strong></i></p>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2023 Rivi by ResMed. All rights reserved.</p>
                    <div>
                    <span>Terms of use</span>
                    <span>Legal & IP</span>
                    <span>Privacy Policy</span>
                    <span>Collection Notice</span>
                    <span>Cookies Notice</span>
                    </div>
                </div>
                <div className='powered'>
                    <p>Powered by:</p>
                    <h2>DrLullaby</h2>
                </div>

            </div>
        
      </footer>
    )
}


export default Footer;