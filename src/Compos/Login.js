import React, { useState } from "react";
import './Debu.css';
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
//import { toast } from "react-toastify";

//const Url = "https://jsonplaceholder.typicode.com/todos/";
const Url = "http://192.168.1.49:3001/usermaster/login";

export default function Login (){

    // const [usname,setUsrname] = useState('')
    // const [psswrd,setPsswrd] = useState('')

    //let isValid = false;
    // const [unameError, setUnameError] = useState('');
    // const [pwdError, setPwdError] = useState('');
    const [forms, setForm] = useState({
        usname: '',
        psswrd:''
    });

    const navigate = useNavigate();

    const onUpdateField = e => {
        console.log(e.target.value);
        const nextFormState = {...forms, [e.target.name]:e.target.value}
        setForm(nextFormState);
        
    }

    const handleSubmit = (e) => {
        navigate("/home");
            // e.preventDefault();
            // console.log(forms);
            // const data = {
            //     username : forms.usname,
            //     password : forms.psswrd
            // }
            // axios.post(Url,data).then((response) =>{
            //     console.log(response.status);
            //         navigate("/home");
            //     //toast.success(`Welcome ${forms.email}`);
            // }).catch((error) => {
            //     //toast.error(error.message);
            //     console.log(error.response.data);
            //     alert(error.response.data);

            // })
    }

        // const handleSubmit =(e)=>{
        //     e.preventDefault();
        //     const data = {
        //         username : usname,
        //         password : psswrd
        //     }
        //     axios.post(Url,data)
        //     .then(function(res){
        //         // console.log(res.data.message);
        //         // alert(res.data.message);
        //         navigate("/users");
        //     })
        //     .catch(function(err){
        //         console.log(err.response.data);
        //         alert(err.response.data)
        //     })

        // }


    return(
        <div>
            <Navbar/>
            <div className="border-double
            border-red-900 border-4 ml-52 mt-20 mr-52 w-1/2 bg-amber-100">
                <center>
                    <div>
                        <h1 style={{fontSize:"30px", backgroundColor:"whitesmoke"}}>Login Here</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Username : </label>
                                <input type="text" 
                                placeholder="Enter Username" 
                                name="usname" 
                                value={forms.usname}
                                onChange={onUpdateField} required
                                // onChange={(e)=> setUsrname(e.target.value)} required
                                className="mt-1 border-2 border-amber-300"></input>
                                {/* <div><span className="error">{unameError}</span></div> */}
                            </div><br></br>
                            <div>
                                <label>Password : </label>
                                <input type="password" 
                                placeholder="Enter Password" 
                                name="psswrd" 
                                value={forms.psswrd}
                                onChange={onUpdateField} required
                                // onChange={(e)=>setPsswrd(e.target.value)} required
                                className="mt-1 border-2 border-amber-300"></input>
                                {/* <div><span className="error">{pwdError}</span></div> */}
                            </div><br></br>
                                <button className="rounded-full
                                bg-green-300 w-36 mt-3 mb-9"
                                >Login</button>
                        </form>
                    </div>
                </center>
            </div>
        </div>
    )
}