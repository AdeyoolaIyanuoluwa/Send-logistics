import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/send logo.png"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div>
        <header>
            <nav class="navbar navbar-expand-lg nav-bg padding">
                <div class="container-fluid ">
                    <Link class="navbar-brand "><img className='logoImg' src={logo} alt="" /></Link>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation ">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="position-relative d-lg-flex d-sm-block  m-auto ul text-white">
                        <li>
                            <Link className="nav-link m-2 me-4 font-size">Platform</Link>
                        </li>
                        <li>
                            <Link className="nav-link m-2 me-4 font-size">Route Optimization API</Link>
                        </li>
                        <li>
                            <Link className="nav-link m-2 me-4 font-size">Network</Link>
                        </li>
                        <li>
                            <Link className="nav-link m-2 me-4 font-size">Contact</Link>
                        </li>
                       <div className='d-flex'>
                            <li>
                                <button className=" nav-link btn btn-size hove">Track</button>
                            </li>
                            <li>
                                <button className=" nav-link btn btn-size2 hove text-white rounded-pill p-2 ps-4 pe-4 bg-d me-4">Login</button>
                            </li>
                       </div>
                    </ul>   
                </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar