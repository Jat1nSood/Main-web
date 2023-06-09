import React from 'react'
import icon from "../Assets/icon.jpg";


export default function Services() {
  return (
    <div>
       <div className="services">
        <div className="services-heading">All the way to online success</div>

        <div className="cards">
          <div className="card">
            <img src={icon} />

            <h4>Social Media</h4>
            <button className="card-button">Know More</button>
          </div>
          <div className="card">
            <img src={icon} />

            <h4>SEO</h4>
            <button className="card-button">Know More</button>
          </div>
          <div className="card">
            <img src={icon} />

            <h4>Advertising</h4>
            <button className="card-button">Know More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
