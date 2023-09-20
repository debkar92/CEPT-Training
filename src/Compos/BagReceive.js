import React from "react";
import '../Compos/Debu.css';
import Sidebar from "./Sidebar";
import Navbar2 from "./Navbar2";

export default function BagReceive (){
    return(
        <div>
            <Navbar2/>
            <Sidebar/>
            <div className="content">
                <h1 style={{fontSize:"1.5rem"}}>Bag Receive</h1>
                <hr className="line"></hr>
            </div>
        </div>
    )
}