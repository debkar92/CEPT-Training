import React from "react";
import '../Compos/Debu.css';
import Sidebar from "./Sidebar";
import Navbar2 from "./Navbar2";

export default function Home (){
    return(
        <div>
            <Navbar2/>
            <Sidebar/>
            <div className="content"><h1 style={{fontSize:"2rem"}}>Welcome to India Post Visibility System 2.0</h1></div>
        </div>
    )
}