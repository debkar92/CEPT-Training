import React from "react";
import '../Compos/Debu.css';
import Navbar from "./Navbar";

export default function Main (){
    return(
        <div>
            <Navbar/>
            <div className="content"><h1 style={{fontSize:"2rem"}}>Main Page Dashboard</h1></div>
        </div>
    )
}