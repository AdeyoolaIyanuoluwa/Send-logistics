import React from 'react'
import "../styles/Header.css"
import img1 from "../images/img 1.webp"
import img from "../images/img.webp"
import arr from "../images/arrow.svg"
function Header() {
  return (
    <div className='background '>
        <div className='row'>
            <div className='col-sm-12 col-lg-4 '>
                <h1 className='text1 '>Deliver more, on one platform</h1>
                <p className='text-white text2 mt-4'>Carriers of all sizes use Send’s software to integrate and onboard new merchants, optimize, operate, and manage their businesses.</p>
                <button className='btn-secondary btn sales rounded-pill text-white text-bold p-1 pe-4 ps-4'>Contact sales</button>
                <span className='ms-5 text-white'>Learn more</span> <img src={arr}  />
            </div>
            <div className='col-sm-12 col-lg-8'>
              <img className='imag shadow' src={img}/>
                <img src={img1} className='img1' />                     
            </div>
            <div>
              <div className='rect'></div>

            </div>
        </div>
    </div>
  )
}

export default Header