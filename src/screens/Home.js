import React from 'react'
import icon from '../Assets/icon.jpg'
import meta from '../Assets/meta.png'

export default function Home() {
  return (
    <div>

        <div className='home-image'>
            <div className='image-components'>
                Hero Page
                <div className='contained-button'>
                    <button>This is a Contained button</button>
                </div>

                <div className='normal-button'>

                    <button>This is a normal button</button>
                </div>
            </div>

        </div>

        <div className='carousel'>

            <div className='logo'>

                <img src={meta}/>
                <img src={meta}/>
                <img src={meta}/>
                <img src={meta}/>
                <img src={meta}/>
                <img src={meta}/>
                <img src={meta}/>
                <img src={meta}/>
                <img src={meta}/>

            </div>

        </div>


        <div className='services'>

            <div className='services-heading'>All the way to online success</div>
        
            <div className='cards'>
                <div className='card'>
                <img src={icon}/>
               
                    <h4>Social Media</h4>
                    <button className='card-button'>Know More</button>

                </div>
                <div className='card'>

                    <img src={icon}/>

                    <h4>SEO</h4>
                    <button className='card-button'>Know More</button>


                </div>
                <div className='card'>
                <img src={icon}/>
               

                    <h4>Advertising</h4>
                    <button className='card-button'>Know More</button>


                </div>

            </div>

        </div>


        <div className='about'>
            This is about section Which may also include reviws
        </div>


        <div className='contact'>

            <div className='details'>
                Details
            </div>

            <div className='form'>

                Form

            </div>
        </div>

      
    </div>
  )
}
