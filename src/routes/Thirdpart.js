import React from 'react'
import "../styles/Thirdpart.css"
import img2 from "../images/img2.webp"
import img3 from "../images/img3.webp"
import img4 from "../images/img4.webp"
import img5 from "../images/img5.svg"
import img6 from "../images/img6.webp"

const Thirdpart = () => {
  return (
    <div>
        <div className='mainbox'>
            <h5 className='text-primary text-bolder'>Designed for operators</h5>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h2 className='pt-2 pb-4 tex1'>A technology-first approach to last-mile delivery</h2>
                        <p className='firstline text-secondary'>We bring together everything that’s required to grow, manage, and optimize your delivery business.</p>
                        <p className='secondline text-secondary'>Send’s products power operations for specialty local carriers, high volume regional carriers, and everything in between.</p>
                        <div>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <img src={img2} className='images1 shadow left' />
                                </div>
                                <div className='col-lg-8 middle'>
                                    <p><img src={img3} className='images shadow' /></p>
                                    <p><img src={img4} className='images shadow' /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 side'>
                       <p> <img src={img5} className='img shadow' /></p>
                        <p className='mt-4'><img src={img6} className='img shadow' /></p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Thirdpart