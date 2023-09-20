import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/IndiaPost.png";
import './Debu.css'
//import { GoBug } from "react-icons/go";

function Navbar2(){
    return (
        <nav>
            
            <div className="navbar-right">
                <Link to="/">
                    <img src={img} alt="Logo" className="logo" />
                </Link>
                <ul className="nav-links">
                    <li className='font-bold mt-3'>India Post Visibility System 2.0</li>
                    {/* <li className="nav-item">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li> */}
                    <li className="nav-item rounded-full w-20 mt-3 mb-3">
                        <Link to="/main">Logout</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/data">Data</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users">Users</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar2