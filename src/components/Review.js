import React, {useState} from 'react'
import meta2 from "../Assets/meta2.png";
import tesla from "../Assets/tesla.png";
import profile from "../Assets/profile.jpg";
import background from "../Assets/background.svg";
export default function Review() {

    const items = [
        {
          name : 'Name of Client',
          designation : "Rudra Founder",
        description : 'Your product helped us to learn more about our clients.'        
    }
      ]

    const[currentIndex, setCurrentIndex] = useState(0);

    const updateindex = (newIndex) =>{

      if(newIndex < 0){

        setCurrentIndex(items.length-1)

      }

      else if(newIndex >=  items.length){

        setCurrentIndex(0);
      }

      else{
        setCurrentIndex(newIndex);
      }

    }
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

                <h5>{items[currentIndex].name}</h5>
                <p className="designation">{items[currentIndex].designation}</p>
                <p className="review-content">{items[currentIndex].description}</p>

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
