import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../Compos/Debu.css';

export default function UserDetails (){
  const {userId}= useParams();
   
  const [UserDetails, setUserDetail]= useState ([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => {
      setUserDetail(response.data);
      const timeout = setTimeout(()=>{
        console.log(response.data);
      },5000)
      return () => clearTimeout(timeout);
      
    });
  },[userId]);

  return (
    <div className="content">
      <h2> Selected User Id: {UserDetails.id}</h2>
     
      <h2> Selected User Name: {UserDetails.name}</h2>
      <h2> Selected User Email: {UserDetails.email}</h2>
    

    </div>
  );
}