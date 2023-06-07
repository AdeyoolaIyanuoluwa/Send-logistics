import React from 'react'
import "../styles/Fourthpart.css"
import icon1 from "../images/icon1.svg"
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"
import icon4 from "../images/icon4.svg"

const Fourthpart = () => {
  return (
    <div className='mainbox2'>
        <div>
            <h5 className='textt text-bolder'>Why Send</h5>
            <div>
                <h3 className='mb-3'>A fully integrated suite of last mile software products</h3>
            </div>
            <div className='row mb-5'>
                <div className=' col-lg-3 lh-base m-auto'>
                    <p><img src={icon1}/></p>
                    <h5 className=' pt-3 pb-3 heading'>End-to-End</h5>
                    <p className='fw-lighter text-secondary fw-normal'>From direct integrations to your customers’ platforms, to address validation, route optimization, sortation, driver apps, tracking, customer portals, and more - <span className='color'>Send has you covered.</span></p>
                </div>
                <div className='m-auto mb-5 col-lg-3 lh-base'>
                    <p><img src={icon2}/></p>
                    <h5 className=' pt-3 pb-3 heading'>Always on</h5>
                    <p className='fw-lighter text-secondary fw-normal'>We’ve built for scale more than once so we understand the importance of reliable partners. Our systems operate with <span className='color'>99.99%+ uptime</span> and scale as you do.</p>
                </div>
                <div className='m-auto col-lg-3 lh-base'>
                    <p><img src={icon3}/></p>
                    <h5 className=' pt-3 pb-3 heading'>We’re constantly evolving</h5>
                    <p className='fw-lighter text-secondary fw-normal'>Need a feature suited to your operation? We build alongside our customers.  We release dozens of <span className='color'>features</span> and system <span className='color'>improvements</span> a year to help you stay ahead of customer requirements and industry shifts.</p>
                </div>
                <div className='m-auto col-lg-3 lh-base'>
                    <p><img src={icon4} /></p>
                    <h5 className=' pt-3 pb-3 heading'>Increase revenue, save time, reduce cost</h5>
                    <p className='fw-lighter text-secondary fw-normal'>Drive revenue with rich features your customers will love, and a fast onboarding experience.<span className='color'>Reduce labor</span> and <span className='color'>maximize resources</span> through our vertical suite of solutions.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fourthpart