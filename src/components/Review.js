import React from 'react'
import meta2 from "../Assets/meta2.png";
import tesla from "../Assets/tesla.png";
import profile from "../Assets/profile.jpg";
import background from "../Assets/background.svg";
export default function Review() {
  return (
    <div>
            <div className="review">
        <img src={background} />

        <p className='review-heading'>Hear from our Clients</p>
        <div className="review-card">
            <div className="profile">
                <img src={profile}/>

            </div>

            <div className="review-elemnts">

                <h5>Name of Client</h5>
                <p className="designation">Founder Rudra</p>
                <p className="review-content">Your product helped us to learn more about our clients.</p>

            </div>



        </div>

        {/* <div className="company-logo-container">
            <div className="company-logo"><img src={meta2} /></div>
            
            <div className="company-logo"><img src={tesla} /></div>
            <div className="company-logo"><img src={tesla} /></div>

            <div className="company-logo"><img src={meta2} /></div>

         


        </div> */}
     
    </div>
    </div>
  )
}
