import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Compos/Debu.css';
import Sidebar from "./Sidebar";
import Navbar2 from "./Navbar2";

const Url = "https://jsonplaceholder.typicode.com/users/";

export default function BagDispatch (){
    const [selectedOption, setSelectedOption] = useState();
    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        axios.get(Url).then((res)=>{setSchedules(res.data)})
    },[])
    // const schedules = [
    //     {
    //         id:1,
    //         sname: 'Pune_Mysore_MMT_1700',
    //         foffice: 'Pune'
    //     },
    //     {
    //         id:2,
    //         sname: 'Mumbai_Mysore_AIR_1700',
    //         foffice: 'Mumbai'
    //     }
    // ]
    const handleChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const schedule = schedules.find(option => option.id === selectedId);
        setSelectedOption(schedule);
        //console.log(schedule);
    }
    return(
        <div>
            <Navbar2/>
            <Sidebar/>
            <div className="content">
                <p style={{fontSize:"1.5rem"}}>Bag Dispatch</p>
                <hr className="line"></hr><br/>
                <label>Schedule ID : </label>
                <select onChange={handleChange}>
                    <option value="">Select a Schedule</option>
                    {schedules.map((sch)=>(
                        <option key={sch.id}
                                value={sch.id}>{sch.id}</option>
                    ))}
                </select>
                <p><label>Schedule Name : </label>
                    {selectedOption && (
                        <label>{selectedOption.name}</label>
                    )}
                </p>
                <p><label>User Name : </label>
                    {selectedOption && (
                        <label>{selectedOption.username}</label>
                    )}
                </p>
                <p><label>Email : </label>
                    {selectedOption && (
                        <label>{selectedOption.email}</label>
                    )}
                </p>
            </div>
        </div>
    )
}