import React from "react";
import meta2 from "../Assets/meta2.png";
import tesla from "../Assets/tesla.png";


import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Review from "../components/Review";



export default function Home() {
  return (
    <div>

        <div className="empty-div">

        </div>
      <div className="home-container">
        <div className="image-components">
          <p className="home-heading">WELCOME TO DYOTA DIGITAL, <br></br> WHERE DIGITAL MARKETING MEETS SUCCESS</p>
          <div className="contained-button">
            <a>Get Started</a>
          </div>
          <div className="normal-button">
            <a>Pricing</a>
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
        <div className="details">Details</div>

        <div className="form">Form</div>
      </div>
    </div>
  );
}
