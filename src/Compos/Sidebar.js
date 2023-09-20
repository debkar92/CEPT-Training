import React from "react";
import { Link } from "react-router-dom";
import './Debu.css'

function Sidebar(){
    return (
        <div className='side'>
            <ul>
                <div ><p className="menu"><Link to="/br">Bag Receive</Link></p></div>
                <div ><p className="menu"><Link to="/bo">Bag Open</Link></p></div>
                <div ><p className="menu"><Link to="/br">Bag Close</Link></p></div>
                <div ><p className="menu"><Link to="/bd">Bag Dispatch</Link></p></div>
            </ul>
        </div>
    )
}
export default Sidebar