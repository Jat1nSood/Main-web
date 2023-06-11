import React from "react";
import home from "../Assets/home.png";

import Dyota from "../Assets/Dyota.svg";


import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Review from "../components/Review";
import contactBackground from '../Assets/contactBackground.svg'


export default function Home() {
  return (
    <div>

      
      <div className="home-container">
        <div className="image-components">
          <p className="home-heading">Welcome to Dyota - Your Partner in Digital Growth</p>
          <div className="contained-button">
            <a>Get Started</a>
          </div>
          <div className="normal-button">
          <a>Pricing<i class="gg-arrow-right"></i></a>
          </div>

          <div className="home-image">
            <img src={home}/>

          </div>
        </div>
      </div>

      <div>
        <Carousel/>
      </div>

     <div>
        <Services/>
     </div>

<div>
    <Review/>
</div>

    <div className="contact">


    
        <div className="details">
            <img className="contact-logo" src={Dyota}/>

            <p className="details-heading">Dyota Digital Agency is a full-service digital marketing agency.<br></br> Attract, Impress, and Convert more leads online and get results with Dyota.</p>
            <div className="social">

            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>

</div>
        </div>

       

        <div className="form">

            
            <div className="form-heading">Let's Get Started</div>
            <div className="form-subheading">Contact Us to build your digital presence</div>

            <div className="icons">
                <div className="icon-card">
                <i class="gg-phone"></i>
                <p style={{ fontSize: '24px' }}>999999999</p>

                </div>
                <div className="icon-card">
                <i class="gg-mail"></i>
                    <p style={{ fontSize: '24px' }}>dyota.digital@gmail.com</p>
                    
                </div>
            </div>

            <div className="input">

                <div className="input-fields">
               
                <input  placeholder = 'Name' id="name"/>

                <input placeholder = 'Email' id="email"/>

                
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}
