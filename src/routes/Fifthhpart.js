import React from 'react'
import "../styles/Fifthpart.css"
import bg from "../images/bg.png"
const Fifthhpart = () => {
  return (
    <div>
        <div className='mainbox1 container-fluid row'>
               <div className='col-lg-7 tex'>
                    <h2 className='pb-3'>Ready to empower your operation?</h2>
                    <p>Discover what our platform can deliver for you, or how Send’s Route Optimization API can be plugged in to provide instant upside. You can also contact sales to get started immediately. Simple, transparent pricing - transactional pricing that scales with your operation. No hidden fees and quick onboarding - get up and running within a day.</p>
                    <button className="btn  text-white me-4 mb-5 text-bolder rounded-pill p-2 ps-4 pe-4">Contact Sales</button>
               </div>
               <div className='imgs col-lg-5'>
                    <img src={bg} alt=""/>
               </div>
        </div>
    </div>
  )
}
export default Fifthhpart