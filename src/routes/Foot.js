import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/send logo.png"
import "../styles/Foot.css"
const Foot = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg nav-bgg pe-5">
                <div class="container-fluid ">
                    <Link class="navbar-brand "><img className='logoImg1 ' src={logo} alt="" /></Link>

                <div className="">
                    <ul class="position-relative d-lg-flex d-sm-block  m-auto ul1 text-white">
                        <li>
                            <Link className="nav-link hover m-2 me-4 font-size">Platform</Link>
                        </li>
                        <li>
                            <Link className="nav-link hover m-2 me-4 font-size">Route Optimization API</Link>
                        </li>
                        <li>
                            <Link className="nav-link hover m-2 me-4 font-size">Network</Link>
                        </li>
                        <li>
                            <Link className="nav-link hover m-2 me-4 font-size">Contact</Link>
                        </li>
                        <div className='d-flex'>
                            <li>
                                <button className=" nav-link btn hove text-white border border-white me-2 bg-none rounded-pill p-2 ps-4 pe-4">Track</button>
                            </li>
                            <li>
                                <button className=" nav-link btn hove text-white col rounded-pill p-2 ps-4 pe-3 me-5 ">Login</button>
                            </li>
                        </div>
                    </ul>   
                </div>
                </div>
            </nav>
    </div>
  )
}

export default Foot